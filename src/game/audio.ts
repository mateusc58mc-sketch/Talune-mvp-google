import { SfxCue } from './engine';

let audioCtx: AudioContext | null = null;
let lastCueTimes: Record<string, number> = {};

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) {
    audioCtx = new Ctx();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playTone(
  freq: number,
  durationSec: number,
  type: OscillatorType,
  volume: number,
  endFreq?: number,
  delaySec = 0
): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const start = ctx.currentTime + delaySec;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (endFreq !== undefined) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, endFreq), start + durationSec);
  }

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + durationSec);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + durationSec + 0.02);
}

export function playSfxCue(cue: SfxCue, muted: boolean): void {
  if (muted) return;
  const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const minGap = cue === 'hit' ? 95 : 70;
  if (lastCueTimes[cue] && now - lastCueTimes[cue] < minGap) {
    return;
  }
  lastCueTimes[cue] = now;

  switch (cue) {
    case 'hit':
      playTone(190, 0.08, 'triangle', 0.06, 90);
      break;
    case 'crit':
      playTone(460, 0.13, 'sawtooth', 0.07, 220);
      playTone(690, 0.1, 'triangle', 0.05, 880, 0.03);
      break;
    case 'skill':
      playTone(340, 0.14, 'triangle', 0.065, 580);
      break;
    case 'heal':
      playTone(523, 0.14, 'sine', 0.06, 659);
      playTone(784, 0.16, 'sine', 0.05, 988, 0.06);
      break;
    case 'shield':
      playTone(392, 0.14, 'sine', 0.06, 523);
      break;
    case 'interrupt':
      playTone(620, 0.12, 'square', 0.07, 180);
      break;
    case 'drop':
      playTone(660, 0.11, 'triangle', 0.07, 880);
      playTone(990, 0.16, 'triangle', 0.06, 1320, 0.08);
      break;
    case 'levelUp':
      playTone(523, 0.12, 'triangle', 0.08);
      playTone(659, 0.12, 'triangle', 0.08, undefined, 0.09);
      playTone(784, 0.14, 'triangle', 0.08, undefined, 0.18);
      playTone(1046, 0.24, 'triangle', 0.09, undefined, 0.27);
      break;
    case 'bossHorn':
      playTone(130, 0.26, 'sawtooth', 0.07, 110);
      playTone(196, 0.28, 'triangle', 0.06, 175, 0.08);
      break;
    case 'victory':
      playTone(523, 0.13, 'triangle', 0.08);
      playTone(659, 0.13, 'triangle', 0.08, undefined, 0.1);
      playTone(784, 0.15, 'triangle', 0.08, undefined, 0.2);
      playTone(1046, 0.3, 'triangle', 0.09, undefined, 0.31);
      break;
    case 'defeat':
      playTone(260, 0.2, 'triangle', 0.07, 190);
      playTone(185, 0.28, 'triangle', 0.06, 120, 0.15);
      break;
  }
}
