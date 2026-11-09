DELF.chapter({
id:'co-p2', part:'co', stage:'preparer', num:2, order:2,
title:'Identifier les types de discours', tr:{ko:'담화 유형 파악하기',en:'Identify types of discourse'},
intro:{ko:'질문을 먼저 읽고 <b>문서 유형을 예측</b>하고, 방송의 종류(행사 안내, 토론, 청취자 참여 방송 등)를 구분하며, 화자의 <b>어조와 언어 레지스터</b>를 파악합니다.',en:'Predict the type of document from the questions, distinguish types of radio programmes and identify tone and register.',fr:'Définir le type de document, distinguer les genres radiophoniques et identifier les registres de langue et le ton.'},
blocks:[
{type:'note',kind:'method',title:'Définir le type de document',tr:{ko:'문서 유형 정하기',en:'Define the type of document'},toc:true,html:'<table><tr><th>Type</th><th>Indices</th></tr><tr><td><span class="say">un reportage</span></td><td>un journaliste sur le terrain, des bruits d’ambiance, des témoignages courts</td></tr><tr><td><span class="say">un entretien</span> / <span class="say">une interview</span></td><td>questions-réponses entre un journaliste et un invité</td></tr><tr><td><span class="say">une critique</span></td><td>jugement sur un film, un livre, une exposition</td></tr><tr><td><span class="say">un fait divers</span></td><td>événement inattendu, accident, vol, anecdote insolite</td></tr><tr><td><span class="say">un débat</span></td><td>plusieurs invités aux opinions opposées</td></tr></table><p>💡 듣기 전에 질문만 읽어도 문서 유형과 주제를 상당 부분 예측할 수 있어요.</p>'},
{type:'ex',id:'e1',title:'Activité 7 — A et B : avant l’écoute',consigne:'Lisez d’abord les questions de la partie C sans écouter le document. À partir de ces questions, faites des hypothèses et répondez.',tr:{ko:'C의 질문을 먼저 읽고(녹음 듣기 전), 가설을 세워 답하세요.',en:'First read the questions in part C without listening. Make hypotheses and answer.'},html:'<p><b>Questions de la partie C :</b> 1. À quelle occasion le journaliste parle-t-il de Bastien Leroux ? — 2. Pourquoi n’est-il pas présent à l’événement ? — 3. Pourquoi mange-t-il en grande quantité le produit qu’il travaille ? — 4. Comment qualifie-t-il son niveau scolaire ? — 5. Quel événement scolaire lui a fait découvrir le chocolat ? — 6. Quelles sont les origines de ses chocolats préférés ?</p>',items:[
{type:'mcq',q:'B1. Quel est le type de document à écouter ?',options:['Une critique.','Un fait divers.','Un reportage.','Un entretien.'],answer:2,explain:'On parle d’un événement et d’une personne absente : un journaliste présente un salon et rapporte des propos → reportage (avec des extraits d’interview).'},
{type:'short',q:'B2. Quel est le secteur professionnel de Bastien Leroux ?',answer:'la chocolaterie (artisan chocolatier)',keywords:[['chocola']],need:1}
]},
{type:'audio',id:'a1',title:'Activité 7 — Reportage',plays:2,situation:{ko:'초콜릿 박람회 개막 르포',en:'Report on the opening of a chocolate fair',fr:'Reportage à l’ouverture d’un salon du chocolat'},names:{M:'Journaliste',M2:'Bastien Leroux'},lines:[
{s:'M',t:'Ce mercredi, c’est l’ouverture du Salon du chocolat de Lyon : 200 exposants, des sculptures géantes et déjà une longue file d’attente. Mais l’artisan dont tout le monde parle, Bastien Leroux, n’est pas là. Son équipe tient le stand, lui est resté dans son atelier près d’Annecy. Je l’ai joint au téléphone ce matin.'},
{s:'M2',t:'Les salons, c’est très bien, mais moi, ma place, c’est devant mon plan de travail. Si je m’arrête une semaine, je perds le fil. Là, je teste une nouvelle recette avec du thé fumé, j’ai besoin de continuer à inventer.'},
{s:'M',t:'On dit que vous mangez près d’un kilo de chocolat par semaine. C’est vrai ?'},
{s:'M2',t:'Peut-être même plus ! Mais ce n’est pas de la gourmandise, c’est mon outil de travail. Il faut goûter chaque fournée pour vérifier que la texture et le goût sont parfaits. Un chocolatier qui ne goûte pas, c’est comme un musicien qui n’écoute pas.'},
{s:'M',t:'Vous n’étiez pas destiné à ce métier ?'},
{s:'M2',t:'Pas du tout ! À l’école, j’étais un élève médiocre, ni bon ni catastrophique, je m’ennuyais. Et puis en troisième, il y a eu le stage d’observation d’une semaine. Je l’ai fait chez un pâtissier-chocolatier de mon village. Le premier jour, il m’a fait tremper les mains dans le chocolat fondu… Ça a été le déclic.'},
{s:'M',t:'Et aujourd’hui, vos chocolats préférés viennent d’où ?'},
{s:'M2',t:'Mes deux coups de cœur, ce sont les fèves du Pérou, très fruitées, et celles de Madagascar, avec une petite acidité. Je les choisis moi-même directement chez les producteurs.'}
]},
{type:'ex',id:'e2',title:'Activité 7 — C : après l’écoute',consigne:'Écoutez maintenant le document. Répondez aux questions, puis vérifiez et corrigez vos hypothèses.',tr:{ko:'이제 문서를 듣고 질문에 답한 뒤, 앞의 가설을 확인·수정하세요.',en:'Now listen. Answer the questions, then check and correct your hypotheses.'},items:[
{type:'short',q:'1. À quelle occasion le journaliste parle-t-il de Bastien Leroux ?',answer:'l’ouverture du Salon du chocolat de Lyon',keywords:[['salon'],['chocolat','lyon','ouverture']],need:2},
{type:'mcq',q:'2. Bastien Leroux n’est pas présent à l’événement parce qu’il doit…',options:['continuer à créer dans son atelier.','finir une commande dans son atelier.','déguster dans le calme de son atelier.'],answer:0,explain:'« j’ai besoin de continuer à inventer » — il teste une nouvelle recette.'},
{type:'short',q:'3. Pour quelle raison mange-t-il en grande quantité le produit qu’il travaille ?',answer:'c’est son outil de travail : il goûte chaque fournée pour vérifier la texture et le goût',keywords:[['goût','gout','vérifi','verifi','outil','qualité','qualite']],need:1},
{type:'mcq',q:'4. Bastien Leroux qualifie son niveau scolaire comme…',options:['nul.','excellent.','médiocre.'],answer:2},
{type:'short',q:'5. Quel événement scolaire lui a fait découvrir le chocolat ?',answer:'le stage d’observation de troisième chez un pâtissier-chocolatier',keywords:[['stage']],need:1},
{type:'short',q:'6. Quelles sont les origines de ses chocolats préférés ?',answer:'le Pérou et Madagascar',keywords:[['pérou','perou'],['madagascar']],need:2}
]},
{type:'audio',id:'a2',title:'Activité 8 — Cinq documents radio',plays:2,situation:{ko:'다섯 개의 라디오 발췌',en:'Five radio extracts',fr:'Cinq extraits radiophoniques'},names:{N:'Annonce',F:'Animatrice',M:'Animateur',F2:'Critique',M2:'Critique 2'},lines:[
{s:'N',t:'Message 1.'},
{s:'M',t:'Ce week-end, ne manquez pas la Fête de la science au parc des Expositions de Grenoble ! Plus de 60 ateliers pour tous les âges : robots, fusées à eau, observation des étoiles. Ouverture samedi et dimanche de 10 heures à 19 heures. Entrée 5 euros, gratuite pour les moins de 18 ans.'},
{s:'N',t:'Message 2.'},
{s:'F',t:'Bonsoir. Ce soir, nos deux critiques ne sont pas d’accord sur l’exposition « Selfies, l’art de se montrer », au musée des Confluences, consacrée à l’histoire de l’autoportrait, de la peinture au smartphone. Camille, vous avez adoré ?'},
{s:'F2',t:'Adoré, oui ! C’est intelligent, drôle…'},
{s:'M2',t:'Moi, j’ai trouvé ça superficiel, je vous expliquerai pourquoi…'},
{s:'N',t:'Message 3.'},
{s:'M',t:'Vous écoutez « Les Voix du Sud », en direct de notre studio de Montpellier. Chaque samedi pendant une heure, on part à la rencontre des jeunes artistes de la région. Aujourd’hui : une slameuse de 16 ans et un groupe de rap occitan. Installez-vous, c’est parti !'},
{s:'N',t:'Message 4.'},
{s:'F',t:'Selon la gendarmerie, une quarantaine de randonneurs ont été bloqués hier soir par une coulée de boue sur un sentier des Pyrénées. Ils ont tous été évacués en hélicoptère. Ce matin, le sentier reste fermé et les experts tentent de comprendre pourquoi les pluies, pourtant annoncées, ont été si violentes.'},
{s:'N',t:'Message 5.'},
{s:'F',t:'C’est l’heure de « Allô Docteur Ado » ! Ce soir, on parle du stress avant les examens avec notre invitée, la psychologue Nadia Sarr. Et tout de suite, un premier auditeur, Maxime, 15 ans. Bonsoir Maxime, quelle est votre question ?'},
{s:'M2',t:'Bonsoir. Je voulais savoir : est-ce que c’est normal de ne pas dormir la veille d’un contrôle ?'}
]},
{type:'ex',id:'e3',title:'Activité 8',consigne:'A. Écoutez les cinq documents radio. Associez chaque message à son type. B. Écoutez encore une fois chacun des documents et répondez aux questions.',tr:{ko:'A. 다섯 개의 라디오 문서를 듣고 각 메시지를 유형과 연결하세요. B. 다시 듣고 질문에 답하세요.',en:'A. Listen to the five documents and match each to its type. B. Listen again and answer.'},items:[
{type:'match',q:'A. Associez chaque message à son type.',left:['Message 1','Message 2','Message 3','Message 4','Message 5'],right:['Présentation d’une émission','Annonce d’un événement','Début d’un débat critique','Lancement d’une émission interactive','Analyse d’un fait divers'],answer:[1,2,0,4,3]},
{type:'short',q:'B1. Message 1 : notez le lieu, les horaires et le prix.',answer:'parc des Expositions de Grenoble ; samedi et dimanche de 10 h à 19 h ; 5 euros, gratuit pour les moins de 18 ans',keywords:[['parc','grenoble'],['10','19'],['5','gratuit']],need:3,lines:2},
{type:'short',q:'B2. Message 2 : notez le lieu, le titre de l’événement et le sujet.',answer:'musée des Confluences ; « Selfies, l’art de se montrer » ; l’histoire de l’autoportrait',keywords:[['musée','musee','confluences'],['selfie'],['autoportrait','portrait']],need:3,lines:2},
{type:'short',q:'B3. Message 3 : notez le lieu et le titre de l’émission.',answer:'studio de Montpellier ; « Les Voix du Sud »',keywords:[['montpellier','studio'],['voix du sud']],need:2},
{type:'short',q:'B4. Message 4 : notez l’origine de l’information et la situation actuelle.',answer:'la gendarmerie ; le sentier est encore fermé, les experts analysent les causes (40 randonneurs évacués)',keywords:[['gendarm'],['fermé','ferme','expert']],need:2,lines:2},
{type:'short',q:'B5. Message 5 : notez le sujet, l’intervenante et la question de l’auditeur.',answer:'le stress avant les examens ; la psychologue Nadia Sarr ; est-ce normal de ne pas dormir la veille d’un contrôle ?',keywords:[['stress','examen'],['psycholog','nadia','sarr'],['dorm','veille']],need:3,lines:2}
]},
{type:'note',kind:'lex',title:'Le ton et l’humeur',tr:{ko:'어조와 기분을 나타내는 형용사',en:'Tone and mood'},toc:true,html:'<table><tr><th>Positif</th><th>Négatif</th></tr><tr><td><span class="say">détendu</span> 편안한 · <span class="say">amusé</span> 즐거워하는 · <span class="say">déterminé</span> 단호한 · <span class="say">bienveillant</span> 호의적인 · <span class="say">enthousiaste</span> 열광적인</td><td><span class="say">moqueur</span> 놀리는 · <span class="say">ironique</span> 반어적인 · <span class="say">sarcastique</span> 빈정대는 · <span class="say">abattu</span> 낙담한 · <span class="say">triste</span> 슬픈 · <span class="say">indifférent</span> 무관심한 · <span class="say">désespéré</span> 절망한</td></tr></table><p>💡 어조는 <b>억양, 속도, 감탄사</b>(<span class="say">Bravo, vraiment !</span>), 과장된 표현, 반복 등으로 드러납니다.</p>'},
{type:'ex',id:'e4',title:'Activité 9 — A',consigne:'Lisez les adjectifs qui caractérisent le ton ou l’humeur et classez-les dans la bonne colonne.',tr:{ko:'어조나 기분을 나타내는 형용사를 읽고 알맞은 칸으로 분류하세요.',en:'Read the adjectives describing tone or mood and sort them.'},items:[
{type:'match',q:'Classez chaque adjectif.',left:['détendu','moqueur','amusé','abattu','triste','ironique','déterminé','sarcastique','indifférent','bienveillant'],right:['Positif à plutôt positif','Négatif à très négatif'],answer:[0,1,0,1,1,1,0,1,1,0],explain:'moqueur / ironique / sarcastique : on se moque de quelqu’un → négatif.'}
]},
{type:'audio',id:'a3',title:'Activité 9 — Deux messages',plays:2,situation:{ko:'두 명의 라디오 청취자/출연자의 발언',en:'Two radio speakers',fr:'Deux interventions à la radio'},names:{N:'Annonce',M:'Intervenant 1',F:'Intervenante 2'},lines:[
{s:'N',t:'Message 1.'},
{s:'M',t:'Ah, le nouveau wifi du lycée ! Bravo, vraiment, quelle merveille de technologie. Il fonctionne parfaitement… dans le bureau du proviseur. Pour nous, dans les salles, il faut lever le bras près de la fenêtre et prier très fort. Mais rassurez-vous, on nous a promis que tout serait réglé… d’ici 2040. Génial. Vive le progrès !'},
{s:'N',t:'Message 2.'},
{s:'F',t:'Je m’appelle Zoé, j’ai 16 ans, et avec mon association, on nettoie la plage de notre ville chaque premier dimanche du mois. On nous dit que ça ne sert à rien, que les déchets reviendront. Eh bien, nous, on ne lâchera rien. L’an dernier, on a ramassé deux tonnes de plastique. Cette année, on veut convaincre la mairie d’installer des fontaines à eau. Et on y arrivera, j’en suis sûre.'}
]},
{type:'ex',id:'e5',title:'Activité 9 — B',consigne:'Vous écoutez chaque document deux fois. Répondez aux questions.',tr:{ko:'각 문서를 두 번 듣습니다. 질문에 답하세요.',en:'You hear each document twice. Answer the questions.'},items:[
{type:'mcq',q:'1. Message 1 — Le ton de l’intervenant est…',options:['déterminé.','désespéré.','sarcastique.'],answer:2,explain:'Il dit le contraire de ce qu’il pense (« Bravo, quelle merveille ») pour critiquer.'},
{type:'mcq',q:'1. Message 2 — Le ton de l’intervenante est…',options:['déterminé.','désespéré.','sarcastique.'],answer:0},
{type:'short',q:'2. Message 1 — Thème central :',answer:'le wifi du lycée qui ne fonctionne pas dans les salles',keywords:[['wifi','wi-fi','internet','connexion']],need:1},
{type:'short',q:'2. Message 2 — Thème central :',answer:'le nettoyage de la plage par une association de jeunes / la lutte contre les déchets plastiques',keywords:[['plage','déchet','dechet','plastique','nettoy']],need:1},
{type:'short',q:'3. Message 1 — Expressions qui justifient le ton :',answer:'« Bravo, vraiment », « quelle merveille de technologie », « prier très fort », « d’ici 2040 », « Génial », « Vive le progrès »',keywords:[['bravo'],['merveille'],['génial','genial'],['progrès','progres'],['2040','prier']],need:2,lines:2},
{type:'short',q:'3. Message 2 — Expressions qui justifient le ton :',answer:'« on ne lâchera rien », « on veut convaincre la mairie », « on y arrivera, j’en suis sûre »',keywords:[['lâcher','lacher','lâchera','lachera'],['arrivera'],['sûre','sure'],['convaincre']],need:2,lines:2}
]}
]});
