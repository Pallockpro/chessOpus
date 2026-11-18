/* ============================================================
   ADMIN HIERARCHY — shared by the game (index.html) and the
   owner console (console/index.html).

   owner : can use every admin ability, and can open /console to
           give mods extra abilities.
   mod   : can only use the abilities marked modDefault (Admin Bypass)
           unless an owner grants more in /console.

   Extra mods can also be added from /console (stored in the database).
============================================================ */
window.ADMIN_CONFIG = {
  owners: [
    'chilten44pallock@gmail.com',
    '30copallock@pulaskischools.org',
    'blueberryggames@gmail.com'
  ],

  mods: [
    'coltenboop@gmail.com',
    '30chborseth@pulaskischools.org',
    '30antepatlan@pulaskischools.org',
    '30rowilliams@pulaskischools.org'
  ],

  // id, button label, icon, description, and whether mods get it without a grant
  abilities: [
    { id:'bypass',    name:'Admin Bypass', icon:'⚡', modDefault:true,
      desc:'Move your pieces to any square, ignoring chess rules.' },
    { id:'chili',     name:'Chili Strike', icon:'🌶', modDefault:false,
      desc:'Blow up any non-king piece with an explosion cutscene.' },
    { id:'evict',     name:'Evict',        icon:'🚀', modDefault:false,
      desc:'Eject any non-king piece into space.' },
    { id:'timewarp',  name:'Time Warp',    icon:'⏳', modDefault:false,
      desc:'Refill your move clock to full on your turn.' },
    { id:'crown',     name:'Coronation',   icon:'👑', modDefault:false,
      desc:'Turn one of your own pieces into a queen.' },
    { id:'forcedraw', name:'Force Draw',   icon:'🤝', modDefault:false,
      desc:'Instantly end the current game as a draw.' }
  ]
};
