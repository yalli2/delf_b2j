DELF.chapter({
id:'ce-comprendre', part:'ce', stage:'comprendre', num:0, order:0,
title:'Comprendre l’épreuve de compréhension des écrits', tr:{ko:'독해 시험 이해하기',en:'Understanding the reading comprehension paper'},
intro:{ko:'DELF B2 <b>독해(Compréhension des écrits)</b> 시험의 구성, 문제 유형, 요구되는 능력을 알아봅니다.',en:'Learn how the DELF B2 reading paper is organised, which question types appear and which skills are tested.',fr:'Découvrez l’organisation de l’épreuve de compréhension des écrits, les types de questions et les savoir-faire évalués.'},
blocks:[
{type:'note',kind:'info',title:'L’épreuve en bref',tr:{ko:'시험 개요',en:'The paper at a glance'},toc:true,html:
'<table><tr><th>Place dans l’examen</th><td>2<sup>e</sup> épreuve collective du DELF B2 scolaire et junior<br><small>(듣기 다음, 쓰기 전에 치르는 두 번째 단체 시험)</small></td></tr>'+
'<tr><th>Durée</th><td><b>1 heure</b> (environ 30 minutes par exercice)</td></tr>'+
'<tr><th>Nombre d’exercices</th><td><b>2</b> documents écrits</td></tr>'+
'<tr><th>Total</th><td><b>25 points</b> (seuil éliminatoire : 5/25)</td></tr></table>'},
{type:'note',kind:'info',title:'Les deux exercices',tr:{ko:'두 가지 문제',en:'The two exercises'},toc:true,html:
'<table><tr><th></th><th>Objectif</th><th>Document</th><th>Questions</th><th>Points</th></tr>'+
'<tr><td><b>Exercice 1</b></td><td>Lire pour s’informer<br><small>정보를 얻기 위해 읽기</small></td><td>article de presse à caractère <b>informatif</b></td><td rowspan="2">QCM, questions ouvertes courtes, vrai/faux + justification</td><td>13 points</td></tr>'+
'<tr><td><b>Exercice 2</b></td><td>Lire un texte argumentatif<br><small>논증적 글 읽기</small></td><td>article de journal ou de blog à caractère <b>argumentatif</b></td><td>12 points</td></tr></table>'},
{type:'note',kind:'method',title:'Les savoir-faire évalués',tr:{ko:'평가되는 능력',en:'Skills assessed'},toc:true,html:
'<ul><li><b>Identifier rapidement le type de texte</b> et son thème — <span class="say">Cet article porte sur le développement durable.</span></li>'+
'<li><b>Identifier le but du texte</b> : raconter un événement ? informer d’une situation ? exprimer une opinion ?</li>'+
'<li><b>Identifier la structure du texte</b> : paragraphes, intertitres, articulateurs (<span class="say">cependant, en outre, par conséquent</span>).</li>'+
'<li><b>Identifier un argument</b> : quel avantage, quel inconvénient l’auteur présente-t-il ?</li>'+
'<li><b>Faire des hypothèses</b> : pourquoi l’auteur emploie-t-il une expression imagée ? quelle est sa position ?</li></ul>'},
{type:'note',kind:'tip',title:'La consigne',tr:{ko:'지시문',en:'The instructions'},html:
'<ul><li>La consigne générale apparaît au début de l’épreuve : <span class="say">Pour répondre aux questions, cochez la bonne réponse ou écrivez l’information demandée.</span></li>'+
'<li>Chaque exercice donne aussi une <b>situation</b> : <span class="say">Vous lisez cet article sur un site d’information francophone. Répondez aux questions.</span></li>'+
'<li>Lisez les consignes <b>avant</b> de lire les documents.</li>'+
'<li>Lisez les questions <b>deux fois</b> : une fois avant le texte (pour orienter votre lecture), une fois après.</li></ul>'},
{type:'note',kind:'method',title:'Les trois formes de questions',tr:{ko:'세 가지 문제 형식',en:'Three question formats'},toc:true,html:
'<p>Les questions suivent toujours <b>l’ordre du document</b>.</p><ol>'+
'<li><b>QROC</b> (question à réponse ouverte courte) : relever une information du texte ou répondre avec vos propres mots. Attention à l’orthographe et aux conjugaisons.</li>'+
'<li><b>QCM</b> (question à choix multiple) : trois propositions, <b>une seule</b> réponse correcte.</li>'+
'<li><b>Vrai / Faux + justification</b> : cochez vrai ou faux et <b>recopiez</b> la phrase du texte qui prouve votre choix. Sans justification correcte : 0 point.</li></ol>'},
{type:'note',kind:'tip',title:'Conseils pour se préparer',tr:{ko:'준비 요령',en:'Preparation tips'},html:
'<ul><li>Lisez régulièrement la presse francophone et des sites d’opinion (blogs, éditoriaux).</li><li>Entraînez-vous à repérer le <b>paratexte</b> : titre, chapeau, intertitres, source, date.</li><li>Maîtrisez les <b>connecteurs logiques</b> et les <b>modalisateurs</b>.</li><li>Appliquez toujours la même méthode : consigne → questions → texte → réponses.</li></ul>'},
{type:'ex',id:'e1',title:'Quiz — Connaissez-vous l’épreuve ?',consigne:'Répondez aux questions sur le format de l’épreuve.',tr:{ko:'시험 형식에 관한 질문에 답하세요.',en:'Answer the questions about the format of the paper.'},items:[
 {type:'mcq',q:'Combien de temps dure l’épreuve de compréhension des écrits ?',options:['30 minutes','1 heure','1 h 30'],answer:1,explain:'독해 시험은 1시간, 문제당 약 30분입니다.'},
 {type:'mcq',q:'Combien de documents faut-il lire ?',options:['un seul','deux','quatre'],answer:1,explain:'정보 전달 글 1편 + 논증적 글 1편.'},
 {type:'match',q:'Associez chaque exercice à son objectif.',left:['Exercice 1','Exercice 2'],right:['Lire un texte argumentatif','Lire pour s’informer','Lire une lettre personnelle'],answer:[1,0]},
 {type:'tf',q:'Dans un QCM du DELF B2, plusieurs réponses peuvent être correctes.',answer:false,justify:'Il n’y a qu’une seule réponse correcte.',explain:'QCM은 정답이 하나뿐입니다.'},
 {type:'tf',q:'Les questions suivent l’ordre du texte.',answer:true,justify:'Les questions sont toujours dans l’ordre du document.'},
 {type:'mcq',q:'Dans une question vrai/faux, que faut-il faire en plus de cocher ?',options:['Résumer le paragraphe','Recopier la phrase du texte qui justifie la réponse','Donner son opinion personnelle'],answer:1,explain:'정당화 문장을 본문에서 그대로 옮겨 써야 점수를 받습니다.'},
 {type:'gap',q:'Complétez.',text:'L’exercice 1 vaut [[*13|12|10]] points et l’exercice 2 vaut [[*12|13|15]] points, soit un total de {{25}} points.'},
 {type:'order',q:'Remettez la méthode de travail dans l’ordre.',items:['Lire la consigne','Parcourir les questions','Lire le texte attentivement','Répondre aux questions','Relire les questions et vérifier']},
 {type:'mcq',q:'Que signifie « QROC » ?',options:['Question à réponse ouverte courte','Question rapide à options cochées','Question de résumé ou de commentaire'],answer:0}
]}
]});
