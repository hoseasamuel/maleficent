export default {
   names: ['Maker'],
   tags: ['todocument'],
   command: ['todocument', 'todoc', 'todokument'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      quoted
   }) => {
      const _0x4d1a20=_0x58f6;function _0x5b56(){const _0x25dda7=['/mpeg','296969tNdUFy','2lQzcrS','audio','pe\x20media\x20n','masukan\x20ty','4067415LNeDEJ','a\x20dengan\x20c','.mp4','18283470AfPJvn','ma\x20filenya','\x20nama\x20type','split','41755ffUEEy','aption\x20','reply','.jpg','9tNqODq','includes','sendMessag','364YKdomu','masukan\x20na','Balas\x20medi','image,\x20vid','ype\x20media\x20','ya\x20image,\x20','chat','eo,\x20audio','\x20contoh\x0a','image','13670176iwzsbs','video','.mp3','video,\x20aud','\x20judulnya\x20','nya\x20harus\x20','invalid\x20\x0at','10829091cXhhLf','file\x20type\x20','/mp4','/jpg','quoted','8139222GMsqXC','download'];_0x5b56=function(){return _0x25dda7;};return _0x5b56();}(function(_0x1ba0b9,_0x538fa4){const _0x4366dd=_0x58f6,_0x1681b1=_0x1ba0b9();while(!![]){try{const _0x455781=parseInt(_0x4366dd(0xdf))/(-0x1*0xe36+-0x1557*-0x1+-0x720)+parseInt(_0x4366dd(0xe0))/(-0x1*0x1eaa+-0x1*0x2521+0x43cd)*(parseInt(_0x4366dd(0xe4))/(-0x1b*0x25+-0x56*0xd+0x848))+-parseInt(_0x4366dd(0xc6))/(0x111*-0x1d+0x962+0x158f)*(parseInt(_0x4366dd(0xeb))/(-0x4*0x52f+-0x1bdd+0x309e))+-parseInt(_0x4366dd(0xdc))/(-0x18a2+0xba9+0xcff)+parseInt(_0x4366dd(0xd7))/(0x227f+-0x56b+-0x1d0d*0x1)+parseInt(_0x4366dd(0xd0))/(-0xcb2+0x17b5+0x1*-0xafb)+-parseInt(_0x4366dd(0xc3))/(0x5f2+0x25b4+-0x2b9d)*(parseInt(_0x4366dd(0xe7))/(0x1399+0x25e1*0x1+-0x3970));if(_0x455781===_0x538fa4)break;else _0x1681b1['push'](_0x1681b1['shift']());}catch(_0x30d3bb){_0x1681b1['push'](_0x1681b1['shift']());}}}(_0x5b56,-0x1*-0x1b5ab3+0x154df7+-0x21f414));function _0x58f6(_0x29fb2e,_0x9229d8){const _0x5d4ae8=_0x5b56();return _0x58f6=function(_0x156fc4,_0x4ce8ae){_0x156fc4=_0x156fc4-(0x1646*0x1+-0x24d6+0xf53);let _0x28eb94=_0x5d4ae8[_0x156fc4];return _0x28eb94;},_0x58f6(_0x29fb2e,_0x9229d8);}if(!m[_0x4d1a20(0xdb)])return m[_0x4d1a20(0xed)](_0x4d1a20(0xc8)+_0x4d1a20(0xe5)+_0x4d1a20(0xec)+(prefix+command)+(_0x4d1a20(0xe9)+_0x4d1a20(0xce))+(prefix+command)+(_0x4d1a20(0xd4)+_0x4d1a20(0xcf)));let [fileName,mime]=text[_0x4d1a20(0xea)]('\x20'),type=mime,name=fileName,query=[_0x4d1a20(0xe1),_0x4d1a20(0xd1),_0x4d1a20(0xcf)];if(!name)return m[_0x4d1a20(0xed)](_0x4d1a20(0xc7)+_0x4d1a20(0xe8));else{if(!type)return m[_0x4d1a20(0xed)](_0x4d1a20(0xe3)+_0x4d1a20(0xe2)+_0x4d1a20(0xcb)+_0x4d1a20(0xd3)+'io');}if(!query[_0x4d1a20(0xc4)](type))return m[_0x4d1a20(0xed)](_0x4d1a20(0xd8)+_0x4d1a20(0xd6)+_0x4d1a20(0xca)+_0x4d1a20(0xd5)+_0x4d1a20(0xc9)+_0x4d1a20(0xcd));m[_0x4d1a20(0xed)](loading);let i=await quoted[_0x4d1a20(0xdd)]();if(type===_0x4d1a20(0xe1))return await conn[_0x4d1a20(0xc5)+'e'](m[_0x4d1a20(0xcc)],{'document':i,'mimetype':type+_0x4d1a20(0xde),'fileName':name+_0x4d1a20(0xd2)},{'quoted':m});else{if(type===_0x4d1a20(0xd1))return await conn[_0x4d1a20(0xc5)+'e'](m[_0x4d1a20(0xcc)],{'document':i,'mimetype':type+_0x4d1a20(0xd9),'fileName':name+_0x4d1a20(0xe6)},{'quoted':m});else{if(type===_0x4d1a20(0xcf))return await conn[_0x4d1a20(0xc5)+'e'](m[_0x4d1a20(0xcc)],{'document':i,'mimetype':type+_0x4d1a20(0xda),'fileName':name+_0x4d1a20(0xee)},{'quoted':m});}}
   },
   limit: 10,
   premium: false
};