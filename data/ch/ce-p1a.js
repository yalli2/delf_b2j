DELF.chapter({
id:'ce-p1a', part:'ce', stage:'preparer', num:1, order:1,
title:'Lire efficacement un texte (1) : paratexte et structure', tr:{ko:'글을 효율적으로 읽기 (1): 곁텍스트와 구조',en:'Reading a text efficiently (1): paratext and structure'},
intro:{ko:'제목·리드(chapeau)·소제목·출처 같은 <b>곁텍스트(paratexte)</b>를 활용해 글의 주제를 빠르게 파악하고, 글의 <b>구조</b>를 찾는 연습을 합니다.',en:'Use the paratext (title, standfirst, subheadings, source) to grasp the topic quickly and identify the structure of a text.',fr:'Utiliser le paratexte pour saisir rapidement le thème d’un article et repérer la structure d’un texte.'},
blocks:[
{type:'note',kind:'method',title:'Le paratexte : ce qui entoure le texte',tr:{ko:'곁텍스트: 본문을 둘러싼 요소',en:'Paratext: everything around the text'},toc:true,html:
'<table><tr><th>Élément</th><th>Rôle</th><th>한국어</th></tr>'+
'<tr><td><span class="say">le titre</span></td><td>annonce le sujet, parfois de façon accrocheuse</td><td>제목</td></tr>'+
'<tr><td><span class="say">le surtitre / la rubrique</span></td><td>indique la thématique (Société, Culture…)</td><td>상위 제목·섹션</td></tr>'+
'<tr><td><span class="say">le chapeau</span></td><td>résume l’essentiel en 2–4 lignes (qui ? quoi ? où ? quand ?)</td><td>리드문</td></tr>'+
'<tr><td><span class="say">les intertitres</span></td><td>découpent le texte en parties</td><td>소제목</td></tr>'+
'<tr><td><span class="say">l’auteur, la source, la date</span></td><td>disent qui écrit, où et quand</td><td>필자·출처·날짜</td></tr></table>'+
'<p>Avant de lire le texte en détail, lisez <b>d’abord</b> ces éléments : vous saurez déjà de quoi parle l’article.</p>'},

{type:'text',id:'t1',label:'Document — Activité 1',source:'Document adapté pour la classe',html:
'<div style="font-size:.85em;color:#0a6;font-weight:bold">[A] LITTORAL</div>'+
'<h3 style="margin:.2em 0">[B] Une licence pro pour devenir gardien de l’océan</h3>'+
'<p><b>[C] Au lycée maritime de Port-Kervel, quatorze étudiants découvrent une formation toute neuve : une licence professionnelle « Pêche durable et protection du milieu marin ». Un parcours exigeant, aux débouchés solides, qui confirme la réputation d’excellence de l’établissement.</b></p>'+
'<p>Ils sont quatorze, âgés de 18 à 22 ans. Ils arrivent de l’île d’Yeu, de Lorient, de Bordeaux, de Normandie, de Lyon ou même de la Martinique, et ils partagent la même certitude : leur avenir professionnel tournera autour de la mer, de ses ressources et de leur protection.</p>'+
'<p>Recrutés sur dossier, ces jeunes – « dont cinq filles ! », souligne fièrement l’équipe pédagogique – forment la toute première promotion. Lundi, ils ont fait leur rentrée sous le regard satisfait de la proviseure, Martine Le Gall : « Accueillir ces étudiants prouve que nous croyons à l’avenir de la pêche et que nous pouvons élever le niveau de formation de nos jeunes pour leur ouvrir davantage de portes. »</p>'+
'<h4>[D] Le seul lycée de la région à proposer ce parcours</h4>'+
'<p>Avec ses 140 élèves et un taux de réussite de 100 % au bac professionnel maritime, l’établissement est le premier de la région à ouvrir cette licence, et le cinquième en France. « On a appris aux marins à pêcher ; aujourd’hui, on veut aussi leur apprendre à gérer la ressource et à protéger les stocks, de la côte jusqu’au large », explique la proviseure. Le lycée travaillera avec plusieurs instituts de recherche marine et avec le parc naturel régional voisin.</p>'+
'<h4>[E] Un programme très complet</h4>'+
'<p>Au menu : une solide culture maritime, en français et en anglais, mais aussi des mathématiques, de la chimie, de la biologie et de la géographie, toujours appliquées à la mer. Sans oublier la navigation ! Un stage de dix semaines est prévu en fin de parcours. Un tiers des étudiants vient d’un bac général, comme Inès, bachelière scientifique de la région lyonnaise : « Je voulais naviguer. Pêche ou commerce ? Je ne sais pas encore. »</p>'+
'<h4>[F] Océanographes, capitaines, gardes du littoral…</h4>'+
'<p>Certains deviendront officiers de la marine marchande, d’autres océanographes ou gardes du littoral, d’autres encore patrons de pêche. « La majorité des pêcheurs de notre port ont plus de cinquante ans, rappelle Martine Le Gall. Il faut préparer la relève. » Vu les besoins du secteur, ces diplômés sont presque sûrs de trouver un emploi.</p>'+
'<p style="text-align:right;font-size:.85em">[G] Yann Morvan, [H] <i>L’Écho des Côtes</i>, [I] 4 septembre</p>'},
{type:'ex',id:'e1',title:'Activité 1',consigne:'Dans l’article, trouvez à quoi correspond chaque étiquette. Puis choisissez le thème général de l’article.',tr:{ko:'기사에서 각 표지(A~I)가 무엇에 해당하는지 찾고, 기사의 전체 주제를 고르세요.',en:'Find what each label in the article corresponds to. Then choose the general theme.'},items:[
 {type:'match',q:'Associez chaque élément du paratexte à sa lettre dans l’article.',left:['le surtitre (rubrique)','le titre','le chapeau','l’intertitre 1','l’intertitre 2','l’intertitre 3','l’auteur','la source','la date'],right:['[A]','[B]','[C]','[D]','[E]','[F]','[G]','[H]','[I]'],answer:[0,1,2,3,4,5,6,7,8],explain:'제목은 가장 큰 글씨, 리드문(chapeau)은 굵은 요약문, 소제목은 본문 중간의 작은 제목입니다.'},
 {type:'mcq',q:'Thème général de l’article :',options:['ÉTUDES','TOURISME','ÉCONOMIE'],answer:0,explain:'새로운 학위 과정(licence pro)과 학생들을 소개하는 기사 → 교육(Études).'},
 {type:'short',q:'En une phrase, de quoi parle l’article ?',answer:'Un lycée maritime ouvre une nouvelle formation sur la pêche durable et la protection de la mer.',keywords:[['formation','licence','étud'],['mer','marin','pêche','océan']],need:2}
]},

{type:'note',kind:'tip',title:'Titre informatif ou polémique ?',tr:{ko:'정보형 제목 vs 논쟁형 제목',en:'Informative or controversial headline?'},html:
'<ul><li><b>Informatif</b> : il présente un fait de façon neutre (<span class="say">Découverte d’un couloir sous le temple</span>).</li>'+
'<li><b>Polémique</b> : il prend position, critique, provoque (<span class="say">C’est une arnaque !</span>). Indices : point d’exclamation, vocabulaire fort ou péjoratif, interpellation.</li></ul>'},
{type:'text',id:'t2',label:'Activité 2 — Titres de presse',source:'Titres inventés pour la classe',html:
'<ol><li style="margin-bottom:.6em"><b>Titre 1</b> — « Pénurie de crème fraîche dans les rayons : une vaste mise en scène ! »</li>'+
'<li style="margin-bottom:.6em"><b>Titre 2</b> — « TEMPLE D’ANGKOR — Un couloir secret détecté sous la grande tour »</li>'+
'<li style="margin-bottom:.6em"><b>Titre 3</b> — « LA PEUR DU VIDE SERAIT INNÉE : ON L’OBSERVE DÈS LE BERCEAU »</li>'+
'<li style="margin-bottom:.6em"><b>Titre 4</b> — « Les huîtres, une source insoupçonnée de microplastiques dans nos assiettes »</li>'+
'<li><b>Titre 5</b> — « CYCLONE LÉNA ! Méfiez-vous des fausses nouvelles sur la situation en Guadeloupe »</li></ol>'},
{type:'ex',id:'e2',title:'Activité 2',consigne:'Lisez les titres et complétez le tableau : mots-clés (2 mots), thème, type de titre (informatif ou polémique).',tr:{ko:'신문 제목을 읽고 표를 완성하세요: 핵심어(2개), 주제, 제목 유형(정보형/논쟁형).',en:'Read the headlines and complete the table: keywords (2), theme, headline type (informative or controversial).'},items:[
 {type:'short',q:'Titre 1 — Mots-clés (2 mots)',answer:'pénurie, crème fraîche',keywords:[['pénurie','manque'],['crème']],need:2},
 {type:'short',q:'Titre 2 — Mots-clés (2 mots)',answer:'temple d’Angkor, couloir secret',keywords:[['angkor','temple'],['couloir','secret']],need:2},
 {type:'short',q:'Titre 3 — Mots-clés (2 mots)',answer:'peur du vide, innée',keywords:[['peur','vide'],['inné','berceau','bébé']],need:2},
 {type:'short',q:'Titre 4 — Mots-clés (2 mots)',answer:'huîtres, microplastiques',keywords:[['huître'],['plastique']],need:2},
 {type:'short',q:'Titre 5 — Mots-clés (2 mots)',answer:'cyclone, fausses nouvelles',keywords:[['cyclone','léna','lena'],['fausse','rumeur','nouvelle']],need:2},
 {type:'match',q:'Associez chaque titre à son thème.',left:['Titre 1','Titre 2','Titre 3','Titre 4','Titre 5'],right:['Consommation / alimentation','Archéologie / histoire','Sciences / psychologie','Environnement / santé','Climat / information (médias)'],answer:[0,1,2,3,4]},
 {type:'match',q:'Type de titre : informatif ou polémique ?',left:['Titre 1','Titre 2','Titre 3','Titre 4','Titre 5'],right:['informatif','polémique'],answer:[1,0,0,0,1],explain:'Titre 1 : « une vaste mise en scène ! » accuse = polémique. Titre 5 : interpellation « Méfiez-vous » + dénonciation des fausses nouvelles = prise de position. Les autres annoncent un fait / une découverte.'}
]},

{type:'note',kind:'method',title:'Lire un chapeau : les 5 questions',tr:{ko:'리드문 읽기: 5W',en:'Reading a standfirst: the 5 Ws'},html:
'<p>Le chapeau répond le plus souvent à : <b>Qui ?</b> (누가) — <b>Quoi ?</b> (무엇을) — <b>Où ?</b> (어디서) — <b>Quand ?</b> (언제) — <b>Pourquoi / Comment ?</b> (왜·어떻게). Repérez ces informations, puis résumez en une phrase.</p>'},
{type:'text',id:'t3',label:'Activité 3 — Trois chapeaux',source:'Documents adaptés pour la classe',html:
'<div style="border:1px solid #ccc;padding:.6em;margin-bottom:.6em"><b>1 – SAINT-AUBIN</b><br>Une soirée inédite : samedi dernier, le Chœur philharmonique de Normandie a donné un concert au centre pénitentiaire de Saint-Aubin. Une grande première pour le chef de chœur, pour l’administration de la prison qui avait réuni détenus et personnel dans la même salle, et pour les choristes, qui ont transformé leur répétition générale en vrai spectacle !<br><small><i>Le Courrier normand</i>, 18 juin</small></div>'+
'<div style="border:1px solid #ccc;padding:.6em;margin-bottom:.6em"><b>2 – L’e-sport en classe : « Certains passent des heures sur leur copie, moi c’est sur ma manette. »</b><br>Le salon Jeux &amp; Écrans ouvre ses portes jeudi à Lyon, avec un immense espace consacré au e-sport, la compétition de jeux vidéo. Une pratique qui entre peu à peu dans les établissements scolaires.<br><small><i>Radio Rhône Info</i>, 26 octobre</small></div>'+
'<div style="border:1px solid #ccc;padding:.6em"><b>3 – VU DANS LA PRESSE CANADIENNE.</b><br>Les badges numériques pourraient devenir la grande tendance de la formation à distance. D’après le site spécialisé <i>ÉduTech Hebdo</i>, ce succès s’explique surtout par l’argent que ces mini-certifications rapportent aux organismes qui les proposent.<br><small><i>Campus Mag</i>, 2 novembre</small></div>'},
{type:'ex',id:'e3',title:'Activité 3',consigne:'Lisez les chapeaux et complétez le tableau (Quoi ? Qui ? Quand ? résumé). Puis choisissez la rubrique du journal. Enfin, imaginez un titre pour chaque article.',tr:{ko:'리드문을 읽고 표를 완성한 뒤(무엇·누가·언제·요약), 신문 섹션을 고르고 기사 제목을 지어 보세요.',en:'Read the standfirsts, complete the table, choose the newspaper section and invent a headline for each article.'},items:[
 {type:'info',html:'<b>Exemple — Chapeau 1</b> : Quoi ? un concert en prison — Qui ? des choristes et des détenus — Quand ? samedi dernier — Résumé : un chœur de musique classique a chanté devant des prisonniers — Titre possible : « Des voix pour franchir les murs ».'},
 {type:'mcq',q:'Chapeau 1 — Rubrique :',options:['Culture','Sport','Économie'],answer:0},
 {type:'short',q:'Chapeau 2 — Quoi ?',answer:'Un salon du jeu vidéo avec un espace e-sport',keywords:[['salon','e-sport','esport','jeu']],need:1},
 {type:'short',q:'Chapeau 2 — Qui ?',answer:'Les joueurs, les élèves / les écoles',keywords:[['joueur','élève','école','établissement','gamer']],need:1},
 {type:'short',q:'Chapeau 2 — Quand ?',answer:'jeudi',keywords:[['jeudi']],need:1},
 {type:'short',q:'Chapeau 2 — Résumé en une phrase',answer:'Le e-sport, présent au salon Jeux & Écrans, entre de plus en plus à l’école.',keywords:[['e-sport','esport','jeu vidéo','jeux vidéo'],['école','scolaire','établissement','classe']],need:2},
 {type:'mcq',q:'Chapeau 2 — Rubrique :',options:['Éducation / Société','Politique','Santé'],answer:0},
 {type:'short',q:'Chapeau 2 — Titre possible',answer:'La manette entre en classe',keywords:[['e-sport','esport','jeu','manette','gamer','console']],need:1},
 {type:'short',q:'Chapeau 3 — Quoi ?',answer:'Les badges numériques (mini-certifications en ligne)',keywords:[['badge','certific']],need:1},
 {type:'short',q:'Chapeau 3 — Qui ?',answer:'Les organismes de formation à distance (selon un site spécialisé)',keywords:[['organisme','école','formation','site','plateforme']],need:1},
 {type:'short',q:'Chapeau 3 — Quand ?',answer:'Aujourd’hui / bientôt (tendance actuelle et future)',keywords:[['aujourd','bientôt','actuel','futur','avenir','maintenant']],need:1},
 {type:'short',q:'Chapeau 3 — Résumé en une phrase',answer:'Les badges numériques se développent dans la formation en ligne parce qu’ils rapportent de l’argent.',keywords:[['badge','certific'],['argent','rapport','revenu','rentab']],need:2},
 {type:'mcq',q:'Chapeau 3 — Rubrique :',options:['Éducation / Formation','Loisirs','Faits divers'],answer:0},
 {type:'short',q:'Chapeau 3 — Titre possible',answer:'Les badges numériques, nouvelle mine d’or de la formation en ligne',keywords:[['badge','certific','diplôme']],need:1}
]},

{type:'note',kind:'method',title:'Repérer les mots-clés',tr:{ko:'핵심어 찾기',en:'Spotting keywords'},toc:true,html:
'<ul><li>Les mots-clés sont les <b>noms et verbes porteurs de sens</b> (pas les articles, prépositions, etc.).</li><li>Ils reviennent souvent, ou sont repris par des <b>synonymes</b>.</li><li>Avec 3 ou 4 mots-clés, vous devez pouvoir reformuler le thème du texte.</li></ul>'},
{type:'text',id:'t4',label:'Activité 4 — Deux chapeaux',source:'Documents adaptés pour la classe',paras:[
'<b>1 –</b> Même s’ils héritaient d’une fortune, la plupart des 18-30 ans continueraient à travailler : c’est ce que révèle un sondage publié en exclusivité par un magazine étudiant. Surprenant ? Peut-être, mais bien réel. Pour les jeunes diplômés, un bon emploi doit avant tout leur permettre de s’épanouir et de grandir sur le plan personnel.',
'<b>2 –</b> Les cures de jus « détox » nettoient-elles vraiment l’organisme ? Un comité indépendant de nutritionnistes s’est penché sur la question. Après avoir examiné de près 140 études, il conclut qu’elles n’apportent rien de plus qu’une alimentation simplement équilibrée. Ces cures sont pourtant vendues partout, en pharmacie comme en supermarché. À tort ?'
]},
{type:'ex',id:'e4',title:'Activité 4',consigne:'Lisez les chapeaux. Repérez les mots-clés, déterminez le thème général de chaque article et choisissez le titre qui convient.',tr:{ko:'리드문을 읽고 핵심어를 찾아 주제를 파악한 뒤 알맞은 제목을 고르세요.',en:'Read the standfirsts, find the keywords, identify the theme and choose the right headline.'},items:[
 {type:'short',q:'Chapeau 1 — a. Mots-clés (3 ou 4)',answer:'jeunes, continuer à travailler, fortune, s’épanouir',keywords:[['jeune','18-30'],['travaill','emploi'],['fortune','hérit','argent'],['épanou','personnel']],need:3},
 {type:'mcq',q:'Chapeau 1 — b. Titre choisi :',options:['Les jeunes ont peur des emplois bien payés.','Pour être heureux au travail, les jeunes veulent surtout gagner plus.','Au travail, les jeunes préfèrent s’épanouir plutôt que de gagner beaucoup d’argent.'],answer:2,explain:'« un bon emploi doit avant tout leur permettre de s’épanouir » → 돈보다 자기 성장.'},
 {type:'short',q:'Chapeau 2 — a. Mots-clés (3 ou 4)',answer:'cures détox, nutritionnistes, études, pas plus efficace qu’une alimentation équilibrée',keywords:[['détox','jus','cure'],['nutrition','comité'],['étude'],['équilibr','rien de plus','efficac']],need:3},
 {type:'mcq',q:'Chapeau 2 — b. Titre choisi :',options:['Les Français refusent les cures détox.','Les cures détox ont-elles vraiment un effet sur notre corps ?','Les cures détox enfin reconnues comme très efficaces.'],answer:1,explain:'기사는 효과에 의문을 제기합니다(« À tort ? »). 1번은 언급되지 않았고 3번은 반대 내용.'},
 {type:'mcq',q:'Quel est le thème commun aux deux chapeaux ?',options:['Ils présentent tous deux les résultats d’une étude ou d’une enquête.','Ils parlent tous deux de santé.','Ils parlent tous deux d’argent.'],answer:0}
]},

{type:'text',id:'t5',label:'Activité 5',title:'[Titre supprimé]',source:'Document adapté pour la classe',paras:[
'Tous les collégiens et lycéens ne sont pas des « enfants du numérique »<sup>1</sup> rivés à leur fil d’actualité. Certains refusent d’être trop connectés, que ce soit à un smartphone ou aux réseaux sociaux.',
'Selon la dernière enquête de l’Observatoire Ados &amp; Écrans, 78 % des 12-18 ans ont leur propre smartphone et passent en moyenne 14 h 40 par semaine en ligne, surtout sur les réseaux sociaux. Sans surprise, les adolescents qui vivent sans téléphone ou sans réseaux sociaux sont donc minoritaires. Parmi eux, certains n’ont pas choisi cette situation. Mais d’autres la refusent volontairement. Ils sont rares, confirme Hugo Ferrand, responsable de l’association Clic Citoyen, et viennent souvent de familles elles-mêmes peu connectées : l’exemple des parents compte.',
'<b>Partie 1 — [intertitre supprimé]</b><br>Pourquoi certains ados préfèrent-ils rester à l’écart ? Léa, 15 ans, vit dans le Jura. Elle n’a aucun compte sur les réseaux sociaux, avant tout parce qu’elle a mieux à faire : « C’est ma décision. Si je voulais m’inscrire, mes parents seraient sans doute d’accord. Mais entre le violon, l’escalade et les devoirs, je n’ai déjà pas assez de temps pour ce que j’aime ! Et franchement, ça ne m’attire pas. »',
'<b>Partie 2 — [intertitre supprimé]</b><br>Comme les adultes qui pratiquent la « détox numérique », les adolescents ressentent parfois le besoin de couper. Vivre plus discrètement, privilégier les échanges « en vrai » : ce ne sont pas les seules raisons. « Ces jeunes défendent le réel, mais il n’existe pas de profil type. Certains refusent d’être géolocalisés ou ne veulent pas livrer leurs données personnelles aux géants du Web », observe Hugo Ferrand.',
'<b>Partie 3 — [intertitre supprimé]</b><br>« C’est une façon de ne pas subir le système. Pour certains, c’est aussi un moyen d’échapper à la surveillance des parents », ajoute la psychologue Nadia Vasseur. Est-ce difficile à vivre ? Pas vraiment, d’après les jeunes interrogés. Malo, 17 ans, a pourtant hésité : « Les réseaux, c’est pratique. Avec mon groupe de musique, on s’en servait pour fixer les répétitions et s’envoyer nos morceaux. J’ai renoncé à certaines choses, mais il faut savoir ce qu’on veut ! »',
'<b>Partie 4 — [intertitre supprimé]</b><br>Pourquoi ces ados volontairement déconnectés sont-ils si peu nombreux ? Sans doute parce que ces outils sont agréables et pratiques : « Ils permettent d’avoir tous ses contacts sous la main, de donner des nouvelles, de partager des informations et de suivre l’actualité de ses artistes préférés », explique Nadia Vasseur. Et même loin des réseaux sociaux, la plupart restent joignables grâce aux SMS<sup>2</sup>, qui demeurent un moyen de communication privilégié chez les adolescents.',
'<small>1. enfants du numérique : jeunes qui ont grandi entourés d’outils numériques. — 2. SMS : messages écrits envoyés par téléphone, textos.</small>'
]},
{type:'ex',id:'e5',title:'Activité 5',consigne:'Dans le texte, le titre et les intertitres ont été supprimés. Lisez l’intégralité du texte et répondez aux questions.',tr:{ko:'제목과 소제목이 삭제된 글입니다. 전체를 읽고 질문에 답하세요.',en:'The title and subheadings have been removed. Read the whole text and answer the questions.'},items:[
 {type:'mcq',q:'1. Quel est le thème principal de l’article ?',options:['Les réseaux sociaux créent des inégalités.','Certains jeunes choisissent de se passer (en partie) du numérique.','Le numérique a bouleversé les habitudes des jeunes.'],answer:1},
 {type:'mcq',q:'2. Sur quel constat l’auteur introduit-il son article ?',options:['Tous les jeunes utilisent les réseaux sociaux.','Une grande majorité de jeunes possèdent un smartphone.','Les jeunes passent de moins en moins de temps sur Internet.'],answer:1,explain:'« 78 % des 12-18 ans ont leur propre smartphone ».'},
 {type:'match',q:'3. Reliez chaque partie du texte à l’intertitre qui convient.',left:['Partie 1','Partie 2','Partie 3','Partie 4'],right:['Déconnecter pour se désintoxiquer','Pourquoi les ados « hors ligne » sont-ils si peu nombreux ?','Un choix difficile ?','Ne pas perdre son temps'],answer:[3,0,2,1],explain:'1: 레아는 시간이 없다 / 2: 디지털 디톡스 / 3: 어려운 선택? (말로의 망설임) / 4: 왜 소수인가.'},
 {type:'short',q:'4a. Pourquoi certains jeunes ne sont-ils pas hyperconnectés ? — Partie 1',answer:'Ils préfèrent d’autres activités / ils n’ont pas le temps / cela ne les intéresse pas.',keywords:[['temps','activité','occupation','violon','escalade','intéress','attire']],need:1},
 {type:'short',q:'4b. — Partie 2',answer:'Ils ont besoin de se déconnecter, de vivre discrètement, de privilégier la vraie vie, d’éviter la géolocalisation et de protéger leurs données.',keywords:[['déconnect','couper','détox'],['discr','vrai','réel'],['géoloc','donnée']],need:2},
 {type:'short',q:'4c. — Partie 3',answer:'Ils refusent de subir le système et veulent échapper au contrôle des parents.',keywords:[['système','subir'],['parent','surveillance','contrôle']],need:1},
 {type:'short',q:'4d. — Partie 4',answer:'Ils restent en contact grâce aux SMS, donc ils ne sont pas isolés.',keywords:[['sms','texto','message']],need:1},
 {type:'short',q:'5. Proposez un titre au texte.',answer:'Ces ados qui choisissent de se déconnecter',keywords:[['déconnect','hors ligne','offline','sans réseau','sans smartphone','sans écran','connect']],need:1}
]}
]});
