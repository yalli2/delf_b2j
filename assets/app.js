/* DELF interactive study site engine — shared by all levels.
   Data: data/book.js (window.BOOK), data/index.js (window.CHAPTERS), data/ch/<id>.js (DELF.chapter({...})) */
(function(){
'use strict';
var BOOK = window.BOOK || {};
var KEY = 'delf_' + (BOOK.key || 'site');
var PARTS = {
  co:{n:1,c:'var(--co)',fr:"Compréhension de l'oral",ko:'듣기 이해',en:'Listening comprehension'},
  ce:{n:2,c:'var(--ce)',fr:'Compréhension des écrits',ko:'읽기 이해',en:'Reading comprehension'},
  pe:{n:3,c:'var(--pe)',fr:'Production écrite',ko:'쓰기',en:'Written production'},
  po:{n:4,c:'var(--po)',fr:'Production orale',ko:'말하기',en:'Oral production'},
  eb:{n:5,c:'var(--eb)',fr:'Épreuves blanches',ko:'실전 모의고사',en:'Mock exams'},
  gen:{n:0,c:'var(--gen)',fr:'Présentation',ko:'시험 안내',en:'About the exam'}
};
var STAGES = {comprendre:{fr:'Comprendre',ko:'이해하기',en:'Understand'},preparer:{fr:'Se préparer',ko:'준비하기',en:'Prepare'},entrainer:{fr:"S'entraîner",ko:'실전 연습',en:'Practice'},pret:{fr:"Prêt pour l'examen !",ko:'시험 준비 완료!',en:'Ready for the exam!'},blanche:{fr:'Épreuve blanche',ko:'모의고사',en:'Mock exam'},info:{fr:'Infos',ko:'안내',en:'Info'}};
var UI = {
  ko:{home:'메인',voice:'음성 설정',check:'정답 확인',retry:'다시 풀기',show:'정답 보기',score:'점수',total:'이 챕터 총점',reset:'챕터 기록 초기화',play:'듣기',pause:'일시정지',stop:'정지',trans:'스크립트 보기',hidetrans:'스크립트 숨기기',listen:'회 들음',limit:'시험에서는 최대 {n}회 들을 수 있어요.',again:'횟수 초기화',read:'본문 듣기',model:'모범 답안 보기',hidemodel:'모범 답안 숨기기',words:'단어',min:'최소',selfeval:'자기 평가 체크리스트 (체크한 항목이 점수가 됩니다)',rec:'녹음 시작',recstop:'녹음 정지',playrec:'내 녹음 듣기',timer:'타이머',prep:'준비',talk:'발표',noRec:'이 브라우저는 음성 인식을 지원하지 않습니다 (Chrome/Edge 권장). 녹음은 가능합니다.',speechHere:'말한 내용이 여기에 프랑스어로 표시됩니다…',prev:'이전',next:'다음',progress:'진도',chapters:'챕터',done:'완료',exercises:'연습문제',start:'시작하기',resetAll:'전체 기록 초기화',confirmReset:'기록을 모두 지울까요?',rate:'말하기 속도',vf:'프랑스어 음성 (여성)',vm:'프랑스어 음성 (남성)',test:'테스트',vhint:'가장 자연스러운 원어민 발음: Microsoft Edge의 "Denise/Henri/Vivienne (Natural)" 또는 Chrome의 "Google français" 음성을 선택하세요. 휴대폰은 기기의 프랑스어 음성을 사용합니다.',accent:'정답이지만 악센트를 확인하세요',correct:'정답!',wrong:'오답',answer:'정답',saved:'저장되었습니다',justify:'근거 문장',yourJust:'근거가 되는 문장을 적어 보세요',keyideas:'핵심 내용',draft:'초안 자동 저장',vrai:'Vrai (참)',faux:'Faux (거짓)',nd:'On ne sait pas',checkAllFirst:'모든 문항을 풀고 확인을 눌러 보세요.',pts:'점',lex:'어휘',tip:'팁',info:'안내',copy:'저작권 보호를 위해 교재 내용을 변형·재구성한 학습용 자료입니다.'},
  en:{home:'Home',voice:'Voice settings',check:'Check answers',retry:'Try again',show:'Show answers',score:'Score',total:'Chapter total',reset:'Reset chapter',play:'Play',pause:'Pause',stop:'Stop',trans:'Show transcript',hidetrans:'Hide transcript',listen:'plays',limit:'In the exam you may listen {n} time(s).',again:'Reset count',read:'Listen to text',model:'Show model answer',hidemodel:'Hide model answer',words:'words',min:'min.',selfeval:'Self-assessment checklist (ticked items count as points)',rec:'Record',recstop:'Stop',playrec:'Play my recording',timer:'Timer',prep:'Preparation',talk:'Speaking',noRec:'Speech recognition is not supported in this browser (use Chrome/Edge). Recording still works.',speechHere:'What you say will appear here in French…',prev:'Previous',next:'Next',progress:'Progress',chapters:'chapters',done:'done',exercises:'exercises',start:'Start',resetAll:'Reset all progress',confirmReset:'Erase all saved progress?',rate:'Speech rate',vf:'French voice (female)',vm:'French voice (male)',test:'Test',vhint:'For the most natural native accent choose "Denise/Henri/Vivienne (Natural)" in Microsoft Edge or "Google français" in Chrome. Phones use the device French voice.',accent:'Correct — check the accents',correct:'Correct!',wrong:'Wrong',answer:'Answer',saved:'Saved',justify:'Justification',yourJust:'Copy the sentence that justifies your answer',keyideas:'Key ideas',draft:'Draft auto-saved',vrai:'Vrai (true)',faux:'Faux (false)',nd:'Not stated',checkAllFirst:'Answer all items, then check.',pts:'pts',lex:'Vocabulary',tip:'Tip',info:'Info',copy:'Study material adapted and rewritten from the textbook to respect copyright.'},
  fr:{home:'Accueil',voice:'Voix',check:'Vérifier',retry:'Recommencer',show:'Voir les réponses',score:'Score',total:'Total du chapitre',reset:'Réinitialiser le chapitre',play:'Écouter',pause:'Pause',stop:'Stop',trans:'Voir la transcription',hidetrans:'Masquer la transcription',listen:'écoute(s)',limit:"À l'examen, vous pouvez écouter {n} fois.",again:'Remettre à zéro',read:'Écouter le texte',model:'Voir un modèle',hidemodel:'Masquer le modèle',words:'mots',min:'min.',selfeval:"Grille d'auto-évaluation (les critères cochés comptent comme points)",rec:'Enregistrer',recstop:'Arrêter',playrec:'Réécouter',timer:'Minuteur',prep:'Préparation',talk:'Expression',noRec:"La reconnaissance vocale n'est pas disponible (Chrome/Edge). L'enregistrement fonctionne.",speechHere:'Ce que vous dites apparaîtra ici…',prev:'Précédent',next:'Suivant',progress:'Progression',chapters:'chapitres',done:'terminés',exercises:'exercices',start:'Commencer',resetAll:'Tout réinitialiser',confirmReset:'Effacer toute la progression ?',rate:'Vitesse',vf:'Voix féminine',vm:'Voix masculine',test:'Tester',vhint:'Pour une voix naturelle : « Denise/Henri/Vivienne (Natural) » dans Microsoft Edge ou « Google français » dans Chrome.',accent:'Correct — attention aux accents',correct:'Bravo !',wrong:'Faux',answer:'Réponse',saved:'Enregistré',justify:'Justification',yourJust:'Recopiez la phrase qui justifie votre réponse',keyideas:'Idées clés',draft:'Brouillon enregistré',vrai:'Vrai',faux:'Faux',nd:'On ne sait pas',checkAllFirst:'Répondez à tout puis vérifiez.',pts:'pts',lex:'Lexique',tip:'Conseil',info:'Info',copy:'Contenus adaptés et réécrits à partir du manuel, à des fins pédagogiques.'}
};
var lang = ls('lang') || 'ko';
function t(k){return (UI[lang]&&UI[lang][k])||UI.en[k]||k}
function tr(o){ if(o==null) return ''; if(typeof o==='string') return o; return o[lang]||o.ko||o.en||o.fr||''}
function ls(k,v){try{ if(v===undefined){return JSON.parse(localStorage.getItem(KEY+'_'+k))} localStorage.setItem(KEY+'_'+k,JSON.stringify(v)) }catch(e){return null}}
function lsDel(k){try{localStorage.removeItem(KEY+'_'+k)}catch(e){}}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function el(tag,attrs,html){var e=document.createElement(tag); if(attrs) for(var k in attrs){ if(k==='class') e.className=attrs[k]; else if(k.slice(0,2)==='on') e.addEventListener(k.slice(2),attrs[k]); else e.setAttribute(k,attrs[k]);} if(html!=null) e.innerHTML=html; return e}
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function shuffle(a,seed){a=a.slice();var s=seed||1;for(var i=a.length-1;i>0;i--){s=(s*9301+49297)%233280;var j=Math.floor(s/233280*(i+1));var x=a[i];a[i]=a[j];a[j]=x}return a}
function hash(str){var h=7;for(var i=0;i<str.length;i++)h=(h*31+str.charCodeAt(i))%100000;return h+1}
function toast(msg){var tt=$('.toast')||document.body.appendChild(el('div',{class:'toast'}));tt.textContent=msg;tt.classList.add('show');clearTimeout(tt._t);tt._t=setTimeout(function(){tt.classList.remove('show')},1800)}

/* ---------- normalisation ---------- */
function base(s){return String(s||'').toLowerCase().replace(/[’`´]/g,"'").replace(/œ/g,'oe').replace(/æ/g,'ae').replace(/\s+/g,' ').replace(/^[\s.,;:!?«»"()-]+|[\s.,;:!?«»"()]+$/g,'').trim()}
function noAcc(s){return base(s).normalize('NFD').replace(/[̀-ͯ]/g,'')}
function cmp(user,answers){ // returns 2 exact,1 accent-only,0 wrong
  var u=base(user); if(!u) return 0; var ua=noAcc(user);
  for(var i=0;i<answers.length;i++){ if(base(answers[i])===u) return 2 }
  for(i=0;i<answers.length;i++){ if(noAcc(answers[i])===ua) return 1 }
  return 0;
}

/* ---------- TTS ---------- */
var TTS = {voices:[],fem:null,mal:null,rate:ls('rate')||0.95,queue:[],speaking:false,cur:null};
var FEM=/(denise|eloise|vivienne|brigitte|coralie|jacqueline|yvette|josephine|celeste|amélie|amelie|audrey|aurélie|aurelie|marie|julie|hortense|virginie|sylvie|charline|ariane|léa|lea|chantal|sophie|female|femme|joana|seraphina|emma)/i;
var MAL=/(henri|remy|rémy|alain|claude|jerome|jérôme|maurice|yves|thomas|paul|antoine|nicolas|daniel|fabrice|gerard|gérard|guillaume|lucien|male|homme|jean|louis|mathieu|xavier)/i;
function vScore(v){var n=v.name.toLowerCase(),s=0; if(/^fr[-_]fr/i.test(v.lang))s+=30; else if(/^fr/i.test(v.lang))s+=15; if(/natural|neural|online|premium|enhanced|plus/.test(n))s+=50; if(/google/.test(n))s+=30; if(/microsoft/.test(n))s+=5; if(/amélie|amelie|thomas|audrey|aurélie/.test(n))s+=12; if(/compact|espeak/.test(n))s-=40; return s}
function loadVoices(){
  if(!('speechSynthesis' in window)) return;
  var all=speechSynthesis.getVoices().filter(function(v){return /^fr/i.test(v.lang)});
  all.sort(function(a,b){return vScore(b)-vScore(a)});
  TTS.voices=all;
  var sf=ls('vf'),sm=ls('vm');
  TTS.fem=all.filter(function(v){return v.name===sf})[0]||all.filter(function(v){return FEM.test(v.name)&&!MAL.test(v.name)})[0]||all[0]||null;
  TTS.mal=all.filter(function(v){return v.name===sm})[0]||all.filter(function(v){return MAL.test(v.name)})[0]||all.filter(function(v){return v!==TTS.fem})[0]||TTS.fem;
  fillVoicePanel();
}
if('speechSynthesis' in window){loadVoices(); speechSynthesis.onvoiceschanged=loadVoices; setTimeout(loadVoices,600)}
function voiceFor(sp){ // sp: F, F2, M, M2, N (narrator = female)
  sp=String(sp||'N').toUpperCase(); var male=sp.charAt(0)==='M';
  var v=male?TTS.mal:TTS.fem, pitch=1;
  if(/2$/.test(sp)){ // second voice of same gender
    var alt=TTS.voices.filter(function(x){return x!==v && (male?MAL.test(x.name):FEM.test(x.name))})[0];
    if(alt) v=alt; else pitch=male?0.85:1.15;
  }
  if(male && v===TTS.fem) pitch=0.75;
  return {voice:v,pitch:pitch};
}
function speakLines(lines,opts){ // lines: [{s,t}] ; opts: {onLine(i), onEnd(), from}
  stopSpeak();
  if(!('speechSynthesis' in window)){toast('TTS not supported');return}
  TTS.cur={lines:lines,opts:opts||{},i:(opts&&opts.from)||0,stopped:false};
  nextLine();
}
function nextLine(){
  var c=TTS.cur; if(!c||c.stopped) return;
  if(c.i>=c.lines.length){TTS.cur=null; c.opts.onEnd&&c.opts.onEnd(); return}
  var L=c.lines[c.i]; c.opts.onLine&&c.opts.onLine(c.i);
  var txt=String(L.t||'').replace(/<[^>]+>/g,'').replace(/\[[^\]]*\]/g,'');
  var u=new SpeechSynthesisUtterance(txt), vp=voiceFor(L.s);
  if(vp.voice){u.voice=vp.voice;u.lang=vp.voice.lang}else u.lang='fr-FR';
  u.pitch=vp.pitch; u.rate=TTS.rate*(L.rate||1);
  var my=c;
  u.onend=function(){ if(my!==TTS.cur||my.stopped) return; my.i++; setTimeout(nextLine, L.pause!=null?L.pause:350)};
  u.onerror=function(e){ if(my!==TTS.cur||my.stopped) return; if(e.error==='interrupted'||e.error==='canceled')return; my.i++; nextLine()};
  speechSynthesis.speak(u);
}
function stopSpeak(){ if(TTS.cur){TTS.cur.stopped=true; var o=TTS.cur.opts; TTS.cur=null; o.onStop&&o.onStop()} if('speechSynthesis' in window) speechSynthesis.cancel(); $$('.speaking').forEach(function(x){x.classList.remove('speaking')})}
function pauseSpeak(){ if(speechSynthesis.speaking&&!speechSynthesis.paused){speechSynthesis.pause();return true} if(speechSynthesis.paused){speechSynthesis.resume();return false} }
function say(text,sp,node){ if(node){ if(node.classList.contains('speaking')){stopSpeak();return} } var lines=[{s:sp||'F',t:text}]; speakLines(lines,{onLine:function(){node&&node.classList.add('speaking')},onEnd:function(){node&&node.classList.remove('speaking')}}) }
window.DELFsay=say;

function fillVoicePanel(){
  var p=$('.vpanel'); if(!p) return;
  var f=$('#vf',p),m=$('#vm',p); if(!f) return;
  var opts=TTS.voices.map(function(v){return '<option value="'+esc(v.name)+'">'+esc(v.name)+' ('+v.lang+')</option>'}).join('')||'<option>—</option>';
  f.innerHTML=opts; m.innerHTML=opts;
  if(TTS.fem) f.value=TTS.fem.name; if(TTS.mal) m.value=TTS.mal.name;
}
function buildVoicePanel(){
  var p=el('div',{class:'vpanel'});
  p.innerHTML='<h4>🔊 '+t('voice')+'</h4><label>'+t('vf')+'</label><select id="vf"></select><label>'+t('vm')+'</label><select id="vm"></select><label>'+t('rate')+': <span id="rv">'+TTS.rate.toFixed(2)+'</span></label><input id="rate" type="range" min="0.6" max="1.3" step="0.05" value="'+TTS.rate+'" style="width:100%"><div style="display:flex;gap:8px;margin-top:10px"><button class="btn ghost" id="vt">▶ '+t('test')+'</button><button class="btn ghost" id="vc">✕</button></div><div class="hint">'+t('vhint')+'</div>';
  document.body.appendChild(p);
  $('#vf',p).onchange=function(){ls('vf',this.value);loadVoices()};
  $('#vm',p).onchange=function(){ls('vm',this.value);loadVoices()};
  $('#rate',p).oninput=function(){TTS.rate=+this.value;ls('rate',TTS.rate);$('#rv',p).textContent=TTS.rate.toFixed(2)};
  $('#vt',p).onclick=function(){speakLines([{s:'F',t:'Bonjour ! Bienvenue dans votre préparation au DELF.'},{s:'M',t:'Bonne chance pour l’examen, et surtout, amusez-vous bien !'}])};
  $('#vc',p).onclick=function(){p.classList.remove('show')};
  fillVoicePanel();
}

/* ---------- shell ---------- */
function topbar(isChapter){
  var b=el('div',{class:'topbar'});
  b.innerHTML='<div class="wrap"><a class="brand" href="index.html"><span class="flag"></span>'+esc(BOOK.short||'DELF')+' <small>'+esc(BOOK.level||'')+'</small></a><span class="spacer"></span>'+(isChapter?'<a class="iconbtn" href="index.html">🏠 '+t('home')+'</a>':'')+'<button class="iconbtn" id="vbtn">🔊 '+t('voice')+'</button><div class="langs">'+['ko','en','fr'].map(function(l){return '<button data-l="'+l+'" class="'+(l===lang?'on':'')+'">'+({ko:'한국어',en:'EN',fr:'FR'})[l]+'</button>'}).join('')+'</div></div>';
  document.body.insertBefore(b,document.body.firstChild);
  $$('.langs button',b).forEach(function(x){x.onclick=function(){ls('lang',x.dataset.l);location.reload()}});
  $('#vbtn',b).onclick=function(){$('.vpanel').classList.toggle('show')};
  buildVoicePanel();
  document.documentElement.lang=lang;
}
function footer(){
  var f=el('footer',{class:'site'});
  f.innerHTML='<div class="wrap">'+esc(BOOK.footer||'')+'<br>'+t('copy')+' · KCIS French · 다인원격평생교육직업학원</div>';
  document.body.appendChild(f);
}
function chScore(id){return ls('ch_'+id)||{}}
function pct(s,m){return m?Math.round(s/m*100):0}
function badgeCls(p){return p>=80?'ok':p>=50?'mid':'low'}

/* ---------- HOME ---------- */
function renderHome(){
  topbar(false);
  var CH=window.CHAPTERS||[];
  var main=el('main');
  var totalS=0,totalM=0,done=0,exN=0;
  CH.forEach(function(c){var s=chScore(c.id); if(s.max){totalS+=s.score;totalM+=s.max} if(s.complete)done++; exN+=c.nEx||0});
  var hero=el('section',{class:'hero'}); if(BOOK.hero) hero.style.setProperty('--hero',BOOK.hero);
  hero.innerHTML='<div class="wrap"><span class="lvl">'+esc(BOOK.level)+'</span><h1>'+esc(BOOK.title)+'</h1><p>'+esc(tr(BOOK.desc))+'</p><div class="stats"><div class="stat"><b>'+CH.length+'</b><span>'+t('chapters')+'</span></div><div class="stat"><b>'+exN+'</b><span>'+t('exercises')+'</span></div><div class="stat"><b>'+done+' / '+CH.length+'</b><span>'+t('done')+'</span></div><div class="stat"><b>'+(totalM?pct(totalS,totalM)+'%':'—')+'</b><span>'+t('score')+'</span></div></div></div>';
  main.appendChild(hero);
  var w=el('div',{class:'wrap'});
  if(BOOK.exam){
    var g=el('div',{class:'examgrid'});
    BOOK.exam.forEach(function(x){g.innerHTML+='<div class="examcell" style="--c:'+PARTS[x.p].c+'"><h4>'+PARTS[x.p].n+'. '+esc(tr(PARTS[x.p]))+'</h4><p>'+esc(tr(x.d))+'</p></div>'});
    w.appendChild(g);
  }
  var order=['gen','co','ce','pe','po','eb'];
  order.forEach(function(p){
    var list=CH.filter(function(c){return c.part===p}); if(!list.length) return;
    var P=PARTS[p], ps=0,pm=0; list.forEach(function(c){var s=chScore(c.id); if(s.max){ps+=s.score;pm+=s.max}});
    var sec=el('section',{class:'part',style:'--c:'+P.c});
    sec.innerHTML='<div class="part-h"><div class="num">'+(P.n||'i')+'</div><div><h2>'+esc(P.fr)+'</h2><small>'+(lang==='fr'?'':esc(tr(P)))+'</small></div><div class="pbar">'+(pm?pct(ps,pm)+'%':'')+'</div></div>';
    var grid=el('div',{class:'chgrid'});
    list.forEach(function(c){
      var s=chScore(c.id), pp=s.max?pct(s.score,s.max):0;
      var st=STAGES[c.stage]||{fr:''};
      grid.innerHTML+='<a class="chcard" href="chapter.html?c='+encodeURIComponent(c.id)+'"><div class="stage">'+esc(st.fr)+(c.num?' · '+c.num:'')+'</div><h3>'+esc(c.title)+'</h3><div class="tr">'+(lang==='fr'?'':esc(tr(c.tr)))+'</div><div class="meta"><span>'+(c.nEx||0)+' '+t('exercises')+'</span>'+(s.max?'<span class="badge '+badgeCls(pp)+'">'+s.score+' / '+s.max+'</span>':'')+'</div><div class="prog"><i style="width:'+(s.max? Math.round((s.checked||0)/(c.nEx||1)*100):0)+'%"></i></div></a>';
    });
    sec.appendChild(grid); w.appendChild(sec);
  });
  var rb=el('div',{style:'text-align:right;margin:20px 0 40px'},'<button class="btn warn" id="resetall">↺ '+t('resetAll')+'</button>');
  w.appendChild(rb); main.appendChild(w); document.body.appendChild(main);
  $('#resetall').onclick=function(){ if(confirm(t('confirmReset'))){ Object.keys(localStorage).forEach(function(k){ if(k.indexOf(KEY+'_ch')===0||k.indexOf(KEY+'_ex')===0||k.indexOf(KEY+'_draft')===0) localStorage.removeItem(k)}); location.reload()} };
  footer();
}

/* ---------- CHAPTER ---------- */
var CUR=null, EXS=[];
window.DELF={chapter:function(c){CUR=c}};
function renderChapterPage(){
  var id=new URLSearchParams(location.search).get('c');
  var CH=window.CHAPTERS||[], idx=-1;
  CH.forEach(function(c,i){if(c.id===id)idx=i});
  topbar(true);
  if(idx<0){document.body.appendChild(el('div',{class:'wrap',style:'padding:40px'},'Chapitre introuvable. <a href="index.html">'+t('home')+'</a>'));return}
  var s=document.createElement('script'); s.src='data/ch/'+id+'.js?v='+(BOOK.v||1);
  s.onload=function(){ if(CUR) buildChapter(CUR,CH,idx) };
  s.onerror=function(){document.body.appendChild(el('div',{class:'wrap',style:'padding:40px'},'Loading error.'))};
  document.head.appendChild(s);
}
function buildChapter(C,CH,idx){
  document.title=C.title+' — '+(BOOK.short||'DELF');
  var P=PARTS[C.part]||PARTS.gen, st=STAGES[C.stage]||{fr:''};
  document.body.style.setProperty('--accent', P.c.indexOf('var')===0? getComputedStyle(document.documentElement).getPropertyValue(P.c.slice(4,-1)).trim():P.c);
  var head=el('header',{class:'chhead'});
  head.innerHTML='<div class="wrap"><div class="crumbs"><a href="index.html">'+t('home')+'</a> › '+esc(P.fr)+' › '+esc(st.fr)+'</div><h1>'+esc(C.title)+'</h1><div class="tr">'+(lang==='fr'?'':esc(tr(C.tr)))+'</div>'+(C.intro?'<div class="intro">'+tr(C.intro)+'</div>':'')+'<div class="scorebar"><span>'+t('total')+'</span><span class="big" id="chs">0 / 0</span><div class="prog"><i id="chp" style="width:0"></i></div><button class="btn ghost" id="chreset">↺ '+t('reset')+'</button></div></div>';
  document.body.appendChild(head);
  var lay=el('div',{class:'wrap layout'}), toc=el('nav',{class:'toc'}), main=el('main');
  lay.appendChild(toc); lay.appendChild(main); document.body.appendChild(lay);
  EXS=[];
  var refs={};
  (C.blocks||[]).forEach(function(b,i){
    b._i=i; var node=renderBlock(b,C); if(!node) return;
    node.id='b'+i; main.appendChild(node);
    if(b.id) refs[b.id]=node;
    var label=b.title||(b.type==='ex'?'Exercice':'');
    if(label && b.type!=='note' || (b.type==='note'&&b.toc)) toc.appendChild(el('a',{href:'#b'+i,'data-b':i},'<span>'+esc(label)+'</span><span class="tsc"></span>'));
  });
  var nav=el('div',{class:'navfoot'});
  var pv=CH[idx-1],nx=CH[idx+1];
  nav.innerHTML=(pv?'<a href="chapter.html?c='+pv.id+'"><small>← '+t('prev')+'</small>'+esc(pv.title)+'</a>':'<span></span>')+(nx?'<a class="nx" href="chapter.html?c='+nx.id+'"><small>'+t('next')+' →</small>'+esc(nx.title)+'</a>':'<span></span>');
  main.appendChild(nav);
  $('#chreset').onclick=function(){ if(!confirm(t('confirmReset')))return; EXS.forEach(function(x){lsDel('ex_'+C.id+'_'+x.key)}); lsDel('ch_'+C.id); location.reload() };
  EXS.forEach(function(x){x.restore()});
  updateChapterScore();
  footer();
  if(location.hash){var tg=$(location.hash); tg&&tg.scrollIntoView()}
}
function updateChapterScore(){
  var s=0,m=0,checked=0;
  EXS.forEach(function(x){ m+=x.max; if(x.state.checked){s+=x.state.score;checked++} var a=$('.toc a[data-b="'+x.b+'"]'); if(a){ $('.tsc',a).textContent=x.state.checked?(fmt(x.state.score)+'/'+x.max):''; a.classList.toggle('done',!!x.state.checked)} });
  $('#chs').textContent=fmt(s)+' / '+m; $('#chp').style.width=pct(s,m)+'%';
  ls('ch_'+CUR.id,{score:Math.round(s*10)/10,max:m,checked:checked,complete:checked>=EXS.length&&EXS.length>0});
}
function fmt(n){return Math.round(n*10)/10}

/* ---------- blocks ---------- */
function renderBlock(b,C){
  switch(b.type){
    case 'note': return blockNote(b);
    case 'text': return blockText(b);
    case 'audio': return blockAudio(b);
    case 'ex': return blockEx(b,C);
    case 'html': var d=el('section',{class:'block'}); d.innerHTML=(b.title?'<h3>'+esc(b.title)+'</h3>':'')+b.html; return d;
  }
  return null;
}
function blockNote(b){
  var k=b.kind||'tip', d=el('section',{class:'block note '+k});
  var icon={tip:'💡',lex:'📚',info:'ℹ️',warn:'⚠️',method:'🧭'}[k]||'💡';
  d.innerHTML='<h3>'+icon+' '+esc(b.title||t(k))+'</h3>'+(b.tr?'<div class="sub">'+esc(tr(b.tr))+'</div>':'')+'<div>'+(b.html||'')+'</div>';
  addSayable(d);
  return d;
}
function addSayable(root){ // elements with class "fr" or data-say become clickable
  $$('[data-say], .say',root).forEach(function(n){ n.classList.add('sayp'); n.title='🔊'; n.addEventListener('click',function(e){e.stopPropagation(); say(n.getAttribute('data-say')||n.textContent,n.getAttribute('data-sp')||'F',n)}) });
}
function blockText(b){
  var d=el('section',{class:'block textdoc'});
  var paras=b.paras||[];
  var body=b.html||paras.map(function(p){return '<p class="sayp">'+p+'</p>'}).join('');
  d.innerHTML=(b.label?'<div class="sub" style="font-family:system-ui">'+esc(b.label)+'</div>':'')+(b.title?'<div class="doc-title">'+esc(b.title)+'</div>':'')+(b.subtitle?'<div style="font-style:italic;color:var(--ink2);margin-bottom:8px">'+esc(b.subtitle)+'</div>':'')+'<div class="'+(b.box?'doc-box':'')+(b.lines?' lnum':'')+'">'+body+'</div>'+(b.source?'<div class="src">'+esc(b.source)+'</div>':'')+'<div style="margin-top:10px;font-family:system-ui"><button class="pbtn sec rd">▶ '+t('read')+'</button> <span class="small">· '+(lang==='ko'?'문단을 클릭하면 그 문단만 들을 수 있어요':lang==='en'?'click a paragraph to hear it':'cliquez sur un paragraphe pour l’écouter')+'</span></div>';
  $$('p.sayp',d).forEach(function(p){p.addEventListener('click',function(){say(p.textContent,'F',p)})});
  $$('.say,[data-say]',d).forEach(function(){}); addSayable(d);
  var btn=$('.rd',d);
  btn.onclick=function(){
    var ps=$$('p, li',d).filter(function(p){return !p.closest('.src')&&p.textContent.trim()});
    if(btn._on){stopSpeak();return}
    btn._on=true; btn.innerHTML='■ '+t('stop');
    var lines=[]; if(b.title) lines.push({s:'F',t:b.title,pause:500}); ps.forEach(function(p){lines.push({s:'F',t:p.textContent,node:p})});
    speakLines(lines,{onLine:function(i){$$('.speaking',d).forEach(function(x){x.classList.remove('speaking')}); lines[i].node&&lines[i].node.classList.add('speaking')},onEnd:done,onStop:done});
    function done(){btn._on=false;btn.innerHTML='▶ '+t('read');$$('.speaking',d).forEach(function(x){x.classList.remove('speaking')})}
  };
  return d;
}
var SPK={F:'Femme',F2:'Femme 2',M:'Homme',M2:'Homme 2',N:'Narrateur'};
function blockAudio(b){
  var d=el('section',{class:'block audio'});
  var max=b.plays||0, key='plays_'+(CUR&&CUR.id)+'_'+b._i, n=0;
  var names=b.names||{};
  d.innerHTML='<h3>🎧 '+esc(b.title||'Document sonore')+'</h3>'+(b.situation?'<div class="audio-situ">'+esc(tr(b.situation))+'</div>':'')+(max?'<div class="sub">'+t('limit').replace('{n}',max)+'</div>':'')+'<div class="player"><button class="pbtn pl">▶ '+t('play')+'</button><button class="pbtn sec pa">❚❚ '+t('pause')+'</button><button class="pbtn sec st">■ '+t('stop')+'</button><span class="wave"><i></i><i></i><i></i><i></i><i></i></span><span class="plays">0'+(max?' / '+max:'')+' '+t('listen')+'</span><button class="iconbtn rz" style="display:none">↺ '+t('again')+'</button><span class="spacer"></span><button class="iconbtn tg">📄 '+t('trans')+'</button></div><div class="trans">'+(b.lines||[]).map(function(L,i){return '<div class="ln" data-i="'+i+'"><span class="sp">'+esc(names[L.s]||L.n||SPK[L.s]||L.s||'')+'</span><span>'+esc(L.t)+'</span></div>'}).join('')+'</div>';
  var pl=$('.pl',d),pa=$('.pa',d),stb=$('.st',d),wave=$('.wave',d),cnt=$('.plays',d),tg=$('.tg',d),tdiv=$('.trans',d),rz=$('.rz',d);
  function upd(){cnt.textContent=n+(max?' / '+max:'')+' '+t('listen'); pl.disabled=!!(max&&n>=max); rz.style.display=(max&&n>=max)?'':'none'}
  function hl(i){$$('.ln',d).forEach(function(x){x.classList.toggle('cur',+x.dataset.i===i)})}
  function end(){wave.classList.remove('on');hl(-1)}
  function start(from){ var lines=(b.lines||[]).map(function(L){return L}); speakLines(lines,{from:from||0,onLine:function(i){hl(i)},onEnd:end,onStop:end}); wave.classList.add('on') }
  pl.onclick=function(){ if(max&&n>=max) return; n++; upd(); start(0) };
  pa.onclick=function(){ var p=pauseSpeak(); wave.classList.toggle('on',!p) };
  stb.onclick=function(){ stopSpeak() };
  rz.onclick=function(){n=0;upd()};
  tg.onclick=function(){var s=tdiv.classList.toggle('show'); tg.innerHTML='📄 '+(s?t('hidetrans'):t('trans'))};
  $$('.ln',d).forEach(function(x){x.onclick=function(){start(+x.dataset.i)}});
  upd();
  return d;
}

/* ---------- exercises ---------- */
function blockEx(b,C){
  var d=el('section',{class:'block ex'});
  var key=b.id||('e'+b._i);
  var items=b.items||[];
  var ctl={b:b._i,key:key,max:0,state:{checked:false,score:0},items:[]};
  d.innerHTML='<div class="ex-head"><h3>✏️ '+esc(b.title||'Exercice')+'</h3><span class="points"></span></div>'+(b.consigne?'<div class="consigne">'+b.consigne+'</div>':'')+(b.tr&&lang!=='fr'?'<div class="consigne-tr">'+esc(tr(b.tr))+'</div>':'')+(b.html?'<div class="docbox">'+b.html+'</div>':'');
  addSayable(d);
  var wrap=el('div'); d.appendChild(wrap);
  var qn=0;
  items.forEach(function(it,i){
    var R=ITEM[it.type||'mcq']; if(!R){console.warn('unknown type',it.type);return}
    var node=el('div',{class:'item'}); wrap.appendChild(node);
    if(!it.noNum) qn++;
    var obj=R(it,node,qn,key+'_'+i); obj.it=it; obj.node=node;
    ctl.items.push(obj); ctl.max+=obj.max;
  });
  $('.points',d).textContent=ctl.max+' '+t('pts');
  var act=el('div',{class:'ex-actions'});
  act.innerHTML='<button class="btn ck">✔ '+t('check')+'</button><button class="btn ghost sh">'+t('show')+'</button><button class="btn ghost rt">↺ '+t('retry')+'</button><span class="exscore"></span>';
  d.appendChild(act);
  var sc=$('.exscore',act);
  function save(){ ls('ex_'+C.id+'_'+key,{checked:ctl.state.checked,score:ctl.state.score,vals:ctl.items.map(function(o){return o.get()})}) }
  ctl.check=function(silent){
    var s=0; ctl.items.forEach(function(o){ s+=o.check() }); ctl.state={checked:true,score:Math.round(s*10)/10};
    var p=pct(s,ctl.max); sc.innerHTML='<span class="badge '+badgeCls(p)+'" style="font-size:15px">'+fmt(s)+' / '+ctl.max+'</span>';
    save(); updateChapterScore();
  };
  ctl.restore=function(){ var st=ls('ex_'+C.id+'_'+key); if(!st) return; if(st.vals) ctl.items.forEach(function(o,i){ if(st.vals[i]!=null) o.set(st.vals[i]) }); if(st.checked) ctl.check(true) };
  $('.ck',act).onclick=function(){ctl.check()};
  $('.sh',act).onclick=function(){ctl.items.forEach(function(o){o.reveal&&o.reveal()})};
  $('.rt',act).onclick=function(){ctl.items.forEach(function(o){o.reset()}); ctl.state={checked:false,score:0}; sc.innerHTML=''; lsDel('ex_'+C.id+'_'+key); updateChapterScore()};
  // autosave values
  d.addEventListener('change',function(){ if(!ctl.state.checked) ls('ex_'+C.id+'_'+key,{checked:false,score:0,vals:ctl.items.map(function(o){return o.get()})}) });
  ctl.state.checked=false;
  EXS.push(ctl);
  return d;
}
function qhead(it,n){ return it.q?'<div class="q">'+(it.noNum?'':'<span class="qn">'+n+'</span>')+'<span>'+it.q+(it.points&&it.points!==1?' <span class="points">('+it.points+' '+t('pts')+')</span>':'')+'</span></div>':'' }
function fb(node){ var f=$('.feedback',node); if(!f){f=el('div',{class:'feedback'});node.appendChild(f)} return f }
function showFb(node,ok,html){ var f=fb(node); f.className='feedback show '+(ok===true?'ok':ok===false?'bad':'info'); f.innerHTML=html }
function hideFb(node){ var f=$('.feedback',node); if(f) f.className='feedback' }
function explain(it){ return it.explain?' <span>— '+it.explain+'</span>':'' }

var ITEM={};
/* single choice */
ITEM.mcq=function(it,node,n,id){
  var pts=it.points||1;
  var opts=it.options.map(function(o,i){return {o:o,i:i}});
  if(it.shuffle) opts=shuffle(opts,hash(id));
  node.innerHTML=qhead(it,n)+'<div class="opts">'+opts.map(function(x){return '<label class="opt" data-i="'+x.i+'"><input type="radio" name="'+id+'" value="'+x.i+'"><span>'+x.o+'</span></label>'}).join('')+'</div>';
  $$('input',node).forEach(function(r){r.onchange=function(){$$('.opt',node).forEach(function(l){l.classList.toggle('sel',$('input',l).checked)})}});
  var o={max:pts};
  o.get=function(){var c=$('input:checked',node);return c?+c.value:null};
  o.set=function(v){var c=$('input[value="'+v+'"]',node); if(c){c.checked=true;c.onchange()}};
  o.check=function(){ var v=o.get(), ok=v===it.answer; $$('.opt',node).forEach(function(l){var i=+l.dataset.i; l.classList.toggle('right',i===it.answer&&(ok||o._rev)); l.classList.toggle('wrong',i===v&&!ok)}); showFb(node,ok,(ok?'✔ '+t('correct'):'✘ '+t('wrong')+' — '+t('answer')+' : <b>'+it.options[it.answer]+'</b>')+explain(it)); return ok?pts:0 };
  o.reveal=function(){$$('.opt',node).forEach(function(l){l.classList.toggle('right',+l.dataset.i===it.answer)}); showFb(node,null,t('answer')+' : <b>'+it.options[it.answer]+'</b>'+explain(it))};
  o.reset=function(){$$('input',node).forEach(function(r){r.checked=false}); $$('.opt',node).forEach(function(l){l.className='opt'}); hideFb(node)};
  return o;
};
/* multiple choice */
ITEM.multi=function(it,node,n,id){
  var pts=it.points||1;
  node.innerHTML=qhead(it,n)+'<div class="opts">'+it.options.map(function(x,i){return '<label class="opt" data-i="'+i+'"><input type="checkbox" value="'+i+'"><span>'+x+'</span></label>'}).join('')+'</div>';
  $$('input',node).forEach(function(r){r.onchange=function(){$$('.opt',node).forEach(function(l){l.classList.toggle('sel',$('input',l).checked)})}});
  var o={max:pts};
  o.get=function(){return $$('input:checked',node).map(function(c){return +c.value})};
  o.set=function(v){(v||[]).forEach(function(x){var c=$('input[value="'+x+'"]',node); if(c){c.checked=true;c.onchange()}})};
  o.check=function(){ var v=o.get(), A=it.answer, good=0,bad=0; v.forEach(function(x){A.indexOf(x)>=0?good++:bad++}); var sc=Math.max(0,(good-bad)/A.length)*pts; $$('.opt',node).forEach(function(l){var i=+l.dataset.i; l.classList.toggle('right',A.indexOf(i)>=0); l.classList.toggle('wrong',v.indexOf(i)>=0&&A.indexOf(i)<0)}); showFb(node,sc===pts,(sc===pts?'✔ '+t('correct'):'✘ '+t('answer')+' : <b>'+A.map(function(i){return it.options[i]}).join(' / ')+'</b>')+explain(it)); return Math.round(sc*2)/2 };
  o.reveal=function(){$$('.opt',node).forEach(function(l){l.classList.toggle('right',it.answer.indexOf(+l.dataset.i)>=0)})};
  o.reset=function(){$$('input',node).forEach(function(r){r.checked=false}); $$('.opt',node).forEach(function(l){l.className='opt'}); hideFb(node)};
  return o;
};
/* vrai / faux (+ justification) */
ITEM.tf=function(it,node,n,id){
  var pts=it.points||1, ch=it.nd?[true,false,'nd']:[true,false];
  node.innerHTML=qhead(it,n)+'<div class="tfrow">'+ch.map(function(v){return '<label class="opt" data-v="'+v+'"><input type="radio" name="'+id+'" value="'+v+'"><span>'+(v===true?t('vrai'):v===false?t('faux'):t('nd'))+'</span></label>'}).join('')+'</div>'+(it.justify?'<div class="just"><input type="text" placeholder="'+t('yourJust')+'"></div>':'');
  $$('input[type=radio]',node).forEach(function(r){r.onchange=function(){$$('.opt',node).forEach(function(l){l.classList.toggle('sel',$('input',l).checked)})}});
  var o={max:pts};
  function val(s){return s==='true'?true:s==='false'?false:s}
  o.get=function(){var c=$('input:checked',node); var j=$('.just input',node); return {v:c?val(c.value):null,j:j?j.value:''}};
  o.set=function(x){ if(!x) return; var c=$('input[value="'+x.v+'"]',node); if(c){c.checked=true;c.onchange()} var j=$('.just input',node); if(j) j.value=x.j||''};
  o.check=function(){ var v=o.get().v, ok=v===it.answer; $$('.opt',node).forEach(function(l){var lv=val(l.dataset.v); l.classList.toggle('right',lv===it.answer); l.classList.toggle('wrong',lv===v&&!ok)}); var lab=it.answer===true?'Vrai':it.answer===false?'Faux':'On ne sait pas'; showFb(node,ok,(ok?'✔ '+t('correct'):'✘ '+t('answer')+' : <b>'+lab+'</b>')+(it.justify?'<br>📌 '+t('justify')+' : « <i>'+it.justify+'</i> »':'')+explain(it)); return ok?pts:0 };
  o.reveal=function(){ var lab=it.answer===true?'Vrai':it.answer===false?'Faux':'On ne sait pas'; showFb(node,null,t('answer')+' : <b>'+lab+'</b>'+(it.justify?'<br>📌 « <i>'+it.justify+'</i> »':''))};
  o.reset=function(){$$('input[type=radio]',node).forEach(function(r){r.checked=false}); $$('.opt',node).forEach(function(l){l.className='opt'}); var j=$('.just input',node); if(j) j.value=''; hideFb(node)};
  return o;
};
/* gap fill: text with {{ans|alt}} for typed blanks, [[*right|wrong|wrong]] for dropdown blanks */
ITEM.gap=function(it,node,n,id){
  var gaps=[], html=String(it.text);
  html=html.replace(/\{\{([^}]+)\}\}/g,function(m,a){ var ans=a.split('|'); gaps.push({k:'in',ans:ans}); var w=Math.max(70,Math.min(260,ans[0].length*11+30)); return '<input type="text" class="gap" style="width:'+w+'px" data-g="'+(gaps.length-1)+'" autocomplete="off" autocapitalize="off" spellcheck="false">' });
  html=html.replace(/\[\[([^\]]+)\]\]/g,function(m,a){ var raw=a.split('|'), right=0; var opts=raw.map(function(x,i){ if(x.charAt(0)==='*'){right=i;return x.slice(1)} return x}); gaps.push({k:'sel',ans:[opts[right]],right:right,opts:opts}); return '<select data-g="'+(gaps.length-1)+'"><option value="">—</option>'+opts.map(function(x,i){return '<option value="'+i+'">'+esc(x)+'</option>'}).join('')+'</select>' });
  var per=it.points?it.points/gaps.length:1;
  node.innerHTML=qhead(it,n)+'<div class="gaptext">'+html+'</div>';
  var o={max:Math.round(per*gaps.length*10)/10};
  function fields(){return $$('[data-g]',node)}
  o.get=function(){return fields().map(function(f){return f.value})};
  o.set=function(v){fields().forEach(function(f,i){if(v[i]!=null)f.value=v[i]})};
  o.check=function(){ var s=0,acc=false; $$('.fix',node).forEach(function(x){x.remove()}); fields().forEach(function(f){ var g=gaps[+f.dataset.g], r; if(g.k==='sel') r=(f.value!==''&&+f.value===g.right)?2:0; else r=cmp(f.value,g.ans); if(r===1)acc=true; f.classList.toggle('right',r>0); f.classList.toggle('wrong',r===0); if(r===0){ f.insertAdjacentHTML('afterend','<span class="fix">→ '+esc(g.ans[0])+'</span>') } s+=r>0?per:0 }); var ok=Math.abs(s-o.max)<.01; if(ok||it.explain||acc) showFb(node,ok,(ok?'✔ '+(acc?t('accent'):t('correct')):'')+explain(it)); else hideFb(node); return s };
  o.reveal=function(){ fields().forEach(function(f){var g=gaps[+f.dataset.g]; if(g.k==='sel') f.value=g.right; else f.value=g.ans[0]; f.classList.add('right')}); it.explain&&showFb(node,null,it.explain) };
  o.reset=function(){ fields().forEach(function(f){f.value='';f.classList.remove('right','wrong')}); $$('.fix',node).forEach(function(x){x.remove()}); hideFb(node) };
  return o;
};
/* matching */
ITEM.match=function(it,node,n,id){
  var per=it.points?it.points/it.left.length:1;
  var order=it.right.map(function(r,i){return i}); if(it.shuffle!==false) order=shuffle(order,hash(id));
  node.innerHTML=qhead(it,n)+'<div class="match">'+it.left.map(function(l,i){return '<div class="mrow"><div class="ml">'+l+'</div><select data-i="'+i+'"><option value="">—</option>'+order.map(function(j){return '<option value="'+j+'">'+esc(String(it.right[j]).replace(/<[^>]+>/g,''))+'</option>'}).join('')+'</select></div>'}).join('')+'</div>';
  var o={max:Math.round(per*it.left.length*10)/10};
  o.get=function(){return $$('select',node).map(function(s){return s.value})};
  o.set=function(v){$$('select',node).forEach(function(s,i){if(v[i]!=null)s.value=v[i]})};
  function ansOf(i){var a=it.answer[i]; return Array.isArray(a)?a:[a]}
  o.check=function(){ var s=0, miss=[]; $$('select',node).forEach(function(sel,i){ var ok=sel.value!==''&&ansOf(i).indexOf(+sel.value)>=0; sel.classList.toggle('right',ok); sel.classList.toggle('wrong',!ok); if(ok)s+=per; else miss.push(String(it.left[i]).replace(/<[^>]+>/g,'')+' → '+String(it.right[ansOf(i)[0]]).replace(/<[^>]+>/g,'')) }); var ok=!miss.length; showFb(node,ok,ok?'✔ '+t('correct')+explain(it):'✘ '+miss.map(esc).join('<br>')+explain(it)); return s };
  o.reveal=function(){ $$('select',node).forEach(function(sel,i){sel.value=ansOf(i)[0]; sel.classList.add('right')}) };
  o.reset=function(){ $$('select',node).forEach(function(s){s.value='';s.classList.remove('right','wrong')}); hideFb(node) };
  return o;
};
/* ordering */
ITEM.order=function(it,node,n,id){
  var pts=it.points||1;
  var cur=shuffle(it.items.map(function(x,i){return i}),hash(id)); if(cur.every(function(v,i){return v===i})&&cur.length>1) cur.reverse();
  node.innerHTML=qhead(it,n)+'<div class="order"></div>';
  var box=$('.order',node);
  function draw(cls){ box.innerHTML=cur.map(function(k,pos){return '<div class="oi '+(cls?(k===pos?'right':'wrong'):'')+'"><span class="ar"><button data-p="'+pos+'" data-d="-1">▲</button><button data-p="'+pos+'" data-d="1">▼</button></span><b>'+(pos+1)+'.</b> <span>'+it.items[k]+'</span></div>'}).join(''); $$('button',box).forEach(function(bt){bt.onclick=function(){var p=+bt.dataset.p,d=+bt.dataset.d,q=p+d; if(q<0||q>=cur.length)return; var x=cur[p];cur[p]=cur[q];cur[q]=x; draw(); node.dispatchEvent(new Event('change',{bubbles:true}))}}) }
  draw();
  var o={max:pts};
  o.get=function(){return cur.slice()};
  o.set=function(v){ if(v&&v.length===cur.length){cur=v.slice();draw()} };
  o.check=function(){ var good=cur.filter(function(k,p){return k===p}).length; draw(true); var ok=good===cur.length; showFb(node,ok,(ok?'✔ '+t('correct'):'✘ '+good+'/'+cur.length)+explain(it)); return ok?pts:Math.round(pts*good/cur.length*2)/2 };
  o.reveal=function(){ cur=it.items.map(function(x,i){return i}); draw(true) };
  o.reset=function(){ cur=shuffle(it.items.map(function(x,i){return i}),hash(id)+1); draw(); hideFb(node) };
  return o;
};
/* short open answer with keyword scoring */
ITEM.short=function(it,node,n,id){
  var pts=it.points||1, multi=(it.lines||1)>1;
  node.innerHTML=qhead(it,n)+'<div class="shortw">'+(multi?'<textarea rows="'+it.lines+'"></textarea>':'<input type="text" autocomplete="off">')+'</div>';
  var f=$(multi?'textarea':'input',node);
  var o={max:pts};
  o.get=function(){return f.value}; o.set=function(v){f.value=v||''};
  o.check=function(){ var v=noAcc(f.value), kws=it.keywords||[]; var found=0; kws.forEach(function(g){ g=Array.isArray(g)?g:[g]; if(g.some(function(k){return v.indexOf(noAcc(k))>=0}))found++ }); var sc; if(!kws.length){ sc=cmp(f.value,[it.answer].concat(it.alt||[]))?pts:0 } else { sc=Math.round(pts*Math.min(1,found/(it.need||kws.length))*2)/2 } if(!base(f.value)) sc=0; var ok=sc===pts; f.style.borderColor=ok?'var(--ok)':sc>0?'var(--warn)':'var(--bad)'; showFb(node,ok?true:sc>0?null:false,(ok?'✔ ':sc>0?'◐ ':'✘ ')+t('answer')+' : <b>'+it.answer+'</b>'+explain(it)); return sc };
  o.reveal=function(){ showFb(node,null,t('answer')+' : <b>'+it.answer+'</b>'+explain(it)) };
  o.reset=function(){ f.value=''; f.style.borderColor=''; hideFb(node) };
  return o;
};
/* free writing with model + self-evaluation checklist */
ITEM.open=function(it,node,n,id){
  var ck=it.checklist||[], pts=it.points||ck.length||1;
  var dk='draft_'+id;
  node.innerHTML=qhead(it,n)+(it.doc?'<div class="docbox" style="margin-left:32px">'+it.doc+'</div>':'')+'<div class="shortw"><textarea rows="'+(it.rows||10)+'" placeholder="'+(it.minWords?t('min')+' '+it.minWords+' '+t('words'):'')+'"></textarea><div class="wc"><span class="cnt">0 '+t('words')+'</span><span>'+(it.minWords?t('min')+' '+it.minWords+' '+t('words'):'')+'</span></div>'+(it.model?'<button class="btn ghost md" style="margin-top:8px">'+t('model')+'</button><div class="model"><h5>Modèle</h5>'+it.model+'<div style="margin-top:8px"><button class="pbtn sec lm">▶ '+t('play')+'</button></div></div>':'')+(ck.length?'<div class="small" style="margin-top:12px;font-weight:700">'+t('selfeval')+'</div><div class="checklist">'+ck.map(function(c,i){return '<label><input type="checkbox" value="'+i+'"><span>'+c+'</span></label>'}).join('')+'</div>':'')+'</div>';
  var ta=$('textarea',node), cnt=$('.cnt',node);
  function wc(){var w=(ta.value.trim().match(/\S+/g)||[]).filter(function(x){return /[0-9A-Za-zÀ-ÿœ]/.test(x)}).length; cnt.textContent=w+' '+t('words'); cnt.style.color=it.minWords&&w<it.minWords?'var(--warn)':'var(--ok)'}
  ta.addEventListener('input',function(){wc(); try{localStorage.setItem(KEY+'_'+dk,ta.value)}catch(e){}});
  try{var dr=localStorage.getItem(KEY+'_'+dk); if(dr){ta.value=dr;}}catch(e){} wc();
  var md=$('.md',node); if(md) md.onclick=function(){var m=$('.model',node); var s=m.classList.toggle('show'); md.textContent=s?t('hidemodel'):t('model')};
  var lm=$('.lm',node); if(lm) lm.onclick=function(){ var m=$('.model',node); var txt=m.textContent.replace(/^Modèle/,'').replace(/▶.*$/,''); say(txt,'F',lm) };
  var o={max:pts};
  o.get=function(){return {txt:ta.value,ck:$$('.checklist input:checked',node).map(function(c){return +c.value})}};
  o.set=function(v){ if(!v)return; if(v.txt&&!ta.value) ta.value=v.txt; (v.ck||[]).forEach(function(i){var c=$('.checklist input[value="'+i+'"]',node); if(c)c.checked=true}); wc() };
  o.check=function(){ var c=$$('.checklist input:checked',node).length; var sc=ck.length?Math.round(pts*c/ck.length*2)/2:(ta.value.trim()?pts:0); var m=$('.model',node); if(m){m.classList.add('show'); if(md)md.textContent=t('hidemodel')} return sc };
  o.reveal=function(){ var m=$('.model',node); if(m){m.classList.add('show'); if(md)md.textContent=t('hidemodel')} };
  o.reset=function(){ $$('.checklist input',node).forEach(function(c){c.checked=false}) };
  return o;
};
/* oral production: timer + recording + speech recognition + model + checklist */
ITEM.speak=function(it,node,n,id){
  var ck=it.checklist||[], pts=it.points||ck.length||1;
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  node.innerHTML=qhead(it,n)+(it.doc?'<div class="docbox" style="margin-left:32px">'+it.doc+'</div>':'')+'<div class="shortw"><div class="recbar">'+(it.prep?'<button class="btn ghost tp">⏱ '+t('prep')+' '+Math.round(it.prep/60)+"'</button>":'')+(it.time?'<button class="btn ghost tt">⏱ '+t('talk')+' '+(it.time>=60?Math.round(it.time/60)+"'":it.time+'"')+'</button>':'')+'<span class="timer">00:00</span><button class="btn rc">● '+t('rec')+'</button><button class="btn ghost pr" disabled>▶ '+t('playrec')+'</button></div><div class="speechout">'+(SR?t('speechHere'):t('noRec'))+'</div>'+(it.model?'<button class="btn ghost md" style="margin-top:8px">'+t('model')+'</button><div class="model"><h5>Modèle</h5>'+it.model+'<div style="margin-top:8px"><button class="pbtn sec lm">▶ '+t('play')+'</button></div></div>':'')+(ck.length?'<div class="small" style="margin-top:12px;font-weight:700">'+t('selfeval')+'</div><div class="checklist">'+ck.map(function(c,i){return '<label><input type="checkbox" value="'+i+'"><span>'+c+'</span></label>'}).join('')+'</div>':'')+'</div>';
  var tm=$('.timer',node), timerId=null;
  function runTimer(sec){ clearInterval(timerId); var left=sec; function sh(){tm.textContent=('0'+Math.floor(left/60)).slice(-2)+':'+('0'+left%60).slice(-2); tm.style.color=left<=10?'var(--bad)':''} sh(); timerId=setInterval(function(){left--; sh(); if(left<=0){clearInterval(timerId); toast('⏰')}},1000) }
  var tp=$('.tp',node); if(tp) tp.onclick=function(){runTimer(it.prep)};
  var tt=$('.tt',node); if(tt) tt.onclick=function(){runTimer(it.time)};
  var rc=$('.rc',node), pr=$('.pr',node), out=$('.speechout',node), rec=null, mr=null, chunks=[], audioURL=null, finalTxt='';
  rc.onclick=function(){
    if(rc._on){ rc._on=false; rc.classList.remove('rec-on'); rc.innerHTML='● '+t('rec'); try{rec&&rec.stop()}catch(e){} try{mr&&mr.state!=='inactive'&&mr.stop()}catch(e){} return }
    rc._on=true; rc.classList.add('rec-on'); rc.innerHTML='■ '+t('recstop'); finalTxt='';
    if(SR){ rec=new SR(); rec.lang='fr-FR'; rec.continuous=true; rec.interimResults=true; rec.onresult=function(e){ var interim=''; for(var i=e.resultIndex;i<e.results.length;i++){ if(e.results[i].isFinal) finalTxt+=e.results[i][0].transcript+' '; else interim+=e.results[i][0].transcript } out.innerHTML=esc(finalTxt)+'<span style="color:var(--mute)">'+esc(interim)+'</span>' }; rec.onend=function(){ if(rc._on){ try{rec.start()}catch(e){} } }; try{rec.start()}catch(e){} }
    if(navigator.mediaDevices&&window.MediaRecorder){ navigator.mediaDevices.getUserMedia({audio:true}).then(function(st){ chunks=[]; mr=new MediaRecorder(st); mr.ondataavailable=function(e){chunks.push(e.data)}; mr.onstop=function(){ st.getTracks().forEach(function(x){x.stop()}); audioURL=URL.createObjectURL(new Blob(chunks)); pr.disabled=false }; mr.start() }).catch(function(){}) }
  };
  pr.onclick=function(){ if(audioURL) new Audio(audioURL).play() };
  var md=$('.md',node); if(md) md.onclick=function(){var m=$('.model',node); var s=m.classList.toggle('show'); md.textContent=s?t('hidemodel'):t('model')};
  var lm=$('.lm',node); if(lm) lm.onclick=function(){ var m=$('.model',node); var txt=m.textContent.replace(/^Modèle/,'').replace(/▶.*$/,''); say(txt,it.voice||'F',lm) };
  var o={max:pts};
  o.get=function(){return {ck:$$('.checklist input:checked',node).map(function(c){return +c.value})}};
  o.set=function(v){ (v&&v.ck||[]).forEach(function(i){var c=$('.checklist input[value="'+i+'"]',node); if(c)c.checked=true}) };
  o.check=function(){ var c=$$('.checklist input:checked',node).length; return ck.length?Math.round(pts*c/ck.length*2)/2:pts };
  o.reveal=function(){ var m=$('.model',node); if(m) m.classList.add('show') };
  o.reset=function(){ $$('.checklist input',node).forEach(function(c){c.checked=false}) };
  return o;
};
/* info item inside exercise (no points) */
ITEM.info=function(it,node){ node.innerHTML='<div style="padding-left:0">'+(it.html||'')+'</div>'; addSayable(node); return {max:0,get:function(){return null},set:function(){},check:function(){return 0},reset:function(){}} };

window.DELFrender={home:renderHome,chapter:renderChapterPage};
})();
