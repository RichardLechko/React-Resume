export {};

const TIME_ZONE = 'America/Chicago';

const part = (parts: Intl.DateTimeFormatPart[], type: Intl.DateTimeFormatPartTypes) =>
  parts.find((p) => p.type === type)?.value ?? '';

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
});

const zoneFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: TIME_ZONE,
  timeZoneName: 'short',
});

const offsetFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: TIME_ZONE,
  timeZoneName: 'longOffset',
});

const format = () => {
  const now = new Date();
  const time = timeFormatter.format(now);
  const zone = part(zoneFormatter.formatToParts(now), 'timeZoneName');
  const offsetRaw = part(offsetFormatter.formatToParts(now), 'timeZoneName');
  const utc = offsetRaw.replace('GMT', 'UTC').replace(':00', '');
  return `${time} ${zone} (${utc})`;
};

const init = () => {
  const wrap = document.querySelector<HTMLElement>('[data-clock]');
  const el = wrap?.querySelector<HTMLElement>('strong');
  if (!wrap || !el) return;
  el.textContent = format();
  wrap.setAttribute('data-ready', 'true');
  setInterval(() => {
    el.textContent = format();
  }, 60_000);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
