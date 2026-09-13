(() => {
  const style = document.createElement('style');
  style.textContent = `html,body,canvas,#game,.ejs_parent,.ejs_game{cursor:default!important}#c64-player-tools{position:fixed;top:8px;left:8px;z-index:2147483647;display:flex;gap:6px;flex-wrap:wrap;max-width:calc(100% - 180px);font:12px monospace;color:#eee;background:#08090de8;padding:5px}#c64-player-tools button{cursor:pointer!important;padding:9px;border:2px solid #aaa394;background:#211957;color:#eee;font:bold 12px monospace}#c64-player-tools span{flex-basis:100%}html:fullscreen{background:#08090d}`;
  document.head.append(style);
  const bar = document.createElement('div');
  bar.id = 'c64-player-tools';
  bar.innerHTML = '<button type="button" id="c64-fullscreen">⛶ FULLSCREEN</button><button type="button" id="c64-release">RELEASE CONTROLS</button><span role="status">Esc releases controls · Click game to resume</span>';
  document.body.append(bar);
  let released = false;
  const held = new Map();
  const hint = bar.querySelector('span');
  function release() {
    for (const event of held.values()) event.target.dispatchEvent(new KeyboardEvent('keyup', {key:event.key,code:event.code,bubbles:true}));
    held.clear();
    released = true;
    window.dispatchEvent(new Event('blur'));
    if (document.pointerLockElement) document.exitPointerLock();
    hint.textContent = 'Controls released · Click game to resume';
    bar.querySelector('#c64-release').focus({preventScroll:true});
  }
  window.addEventListener('keydown', event => {
    if (!event.isTrusted) return;
    if (event.key === 'Escape') { release(); if(document.fullscreenElement) document.exitFullscreen().catch(() => {}); event.stopImmediatePropagation(); return; }
    if (event.ctrlKey || event.metaKey || released || bar.contains(event.target)) {
      event.stopImmediatePropagation(); return;
    }
    held.set(event.code, {key:event.key,code:event.code,target:event.target});
  }, true);
  window.addEventListener('keyup', event => {
    held.delete(event.code);
    if (event.isTrusted && (released || event.ctrlKey || event.metaKey || bar.contains(event.target))) event.stopImmediatePropagation();
  }, true);
  document.addEventListener('pointerdown', event => {
    if (!bar.contains(event.target)) { released = false; hint.textContent = 'Esc releases controls · Click game to resume'; }
  }, true);
  bar.addEventListener('pointerdown', event => event.stopPropagation());
  bar.addEventListener('click', event => event.stopPropagation());
  bar.querySelector('#c64-release').onclick = release;
  const full = bar.querySelector('#c64-fullscreen');
  full.onclick = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch (_) { hint.textContent = 'Fullscreen unavailable in this browser. Open the player in a new tab.'; }
  };
  document.addEventListener('fullscreenchange', () => {
    full.textContent = document.fullscreenElement ? '⛶ EXIT FULLSCREEN' : '⛶ FULLSCREEN';
  });
})();
