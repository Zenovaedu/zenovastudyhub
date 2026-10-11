/* Zenova Practice section - loaded on demand when a student opens #/practice */
var PIN_CODES=["ZNV-F1ABGCRK", "ZNV-4AF45VGD", "ZNV-QIEI61P5", "ZNV-V3S1G963", "ZNV-0C3M2D0N", "ZNV-XGS9YXYD", "ZNV-F3PK7HD5", "ZNV-ULLD4QOT", "ZNV-GA0RSGFQ", "ZNV-TA6030MH", "ZNV-D4IVE4FH", "ZNV-NWO1YEZI", "ZNV-PDDGZX57", "ZNV-3O29SGAJ", "ZNV-KLWNY876", "ZNV-57B1OMPN", "ZNV-WKXIVBY9", "ZNV-WDK90C1I", "ZNV-H4MKS2S8", "ZNV-J703TVU7", "ZNV-RFXL54F6", "ZNV-YY18AH5U", "ZNV-IUS0HRV3", "ZNV-UXXKEZ3B", "ZNV-ZP4J977U", "ZNV-GJIEJ8DP", "ZNV-KSMRPUPD", "ZNV-U2T0PFTG", "ZNV-BBTRT9NQ", "ZNV-EB19XUM1", "ZNV-NLY41TZ0", "ZNV-OXPRFO0G", "ZNV-NMF4I1HX", "ZNV-F2HQUR1A", "ZNV-QWGXTIJM", "ZNV-TKF0DXS7", "ZNV-H1NL0PWQ", "ZNV-OBF67DFZ", "ZNV-OMGYIYRK", "ZNV-0IQYB5OL", "ZNV-5Y46AVOL", "ZNV-R03JY70G", "ZNV-Q57NS9K2", "ZNV-2WBQQKG4", "ZNV-XU2ELWLS", "ZNV-RITD2PZW", "ZNV-8XWNXYBZ", "ZNV-GEI7JR05", "ZNV-CI3SD4VY", "ZNV-MI44X57M", "ZNV-VALT3C04", "ZNV-LVTOCEV0", "ZNV-8II7E1KY", "ZNV-VMKH7K0Y", "ZNV-1326O8EB", "ZNV-GIJ81KRB", "ZNV-YXBAWBZQ", "ZNV-O51SYWDM", "ZNV-WGEG1V7G", "ZNV-RDC11Y2I", "ZNV-G4WYWOJV", "ZNV-VSV4FZIU", "ZNV-2S9346XC", "ZNV-0S7UAFU6", "ZNV-MTD9P418", "ZNV-WUK68PUD", "ZNV-DX71NXB4", "ZNV-O30V7JNT", "ZNV-5YQFJS0X", "ZNV-AUWKQJ5T", "ZNV-WFECNZB5", "ZNV-V3XCLAX6", "ZNV-C7VE6X1P", "ZNV-TA39OA07", "ZNV-JKYDHUPE", "ZNV-HB4QQT68", "ZNV-A92TSM2D", "ZNV-HC9V4ZJ2", "ZNV-IEJZQRNW", "ZNV-6IRX7Y86", "ZNV-L1OEXUXL", "ZNV-T3IE1G5J", "ZNV-E7GDXKLX", "ZNV-AU4NY15C", "ZNV-85K0B346", "ZNV-CH3B35SP", "ZNV-BWI7GDA3", "ZNV-LXYPG8LH", "ZNV-ZPY2O2KO", "ZNV-HWU5VEWH", "ZNV-OBOMOYU8", "ZNV-LR602MR0", "ZNV-2V3T4WYL", "ZNV-6ZD03A58", "ZNV-2VWX75XW", "ZNV-7IL2PTUR", "ZNV-BAK3E56T", "ZNV-ZWRT5QQS", "ZNV-ZA97XZ94", "ZNV-BRQJV8KF", "ZNV-DUBKKQ0K", "ZNV-446TBLEI", "ZNV-6033FHLG", "ZNV-O9FJA4AD", "ZNV-HUIX0B2Z", "ZNV-3UNQAMO0", "ZNV-A44Q42DR", "ZNV-ZZOWIJZY", "ZNV-XZFXPYMG", "ZNV-GGTS4KO9", "ZNV-BF6COIO1", "ZNV-JH04SWIK", "ZNV-A7GSLT0G", "ZNV-70JOJ0YL", "ZNV-SL6HD0DM", "ZNV-7VKZQ4AB", "ZNV-4UWXHET8", "ZNV-RUVHSZUA", "ZNV-NL2ZXPWH", "ZNV-UU370NMK", "ZNV-6VNU9ZLG", "ZNV-HJ5GJG45", "ZNV-54C2X9AW", "ZNV-3SY0ZWSM", "ZNV-TZTO09O6", "ZNV-JWWBBHGE", "ZNV-830UARGJ", "ZNV-87MTUG0K", "ZNV-EXLSPI3G", "ZNV-24C6U12M", "ZNV-LZEZYD55", "ZNV-50TTC8OL", "ZNV-OVYRPC2V", "ZNV-AUGJTYQG", "ZNV-FVWOW3IR", "ZNV-WAEB6PHG", "ZNV-41H9VO7O", "ZNV-T9NGRQNC", "ZNV-13SIPXFJ", "ZNV-IRSTWIK4", "ZNV-HGX64VAR", "ZNV-IAEO150C", "ZNV-LKUD5FJP", "ZNV-EFHUCYRR", "ZNV-ZAM8VE0L", "ZNV-IV09BT58", "ZNV-2ODLZ9R6", "ZNV-2KTIWZJS", "ZNV-BM69CRYT", "ZNV-11LQCK88", "ZNV-796M1C4M", "ZNV-5X56X91X", "ZNV-YHPVVH1W", "ZNV-2D75MVDZ", "ZNV-MEZHCAAB", "ZNV-CG2NY8EX", "ZNV-8S83JPBA", "ZNV-PX43RRCW", "ZNV-7B0UCQN1", "ZNV-GKIGUMR2", "ZNV-N91ZUOM8", "ZNV-ER6SU7P7", "ZNV-PDV6PHVE", "ZNV-B5TMQ85B", "ZNV-WUZ7BARR", "ZNV-H01WQ8F2", "ZNV-XEEPMBU9", "ZNV-ALK9DQ9B", "ZNV-2SEOJ1CK", "ZNV-KMEDNW6X", "ZNV-6XFTA41D", "ZNV-H6EQQMLR", "ZNV-6G6E7NRA", "ZNV-0K4HRSWS", "ZNV-6NJ64S33", "ZNV-SKG2EGXP", "ZNV-2EQKINDW", "ZNV-Z0N4UAM9", "ZNV-BT3VSJ8L", "ZNV-ON98UMZG", "ZNV-ACT23XY2", "ZNV-Q2XPL693", "ZNV-VM2XSE5S", "ZNV-S6ZNTLHC", "ZNV-N4A38MBH", "ZNV-LMVSAKEQ", "ZNV-L6MF50FV", "ZNV-E1VRU4F6", "ZNV-CZY6TSYO", "ZNV-0NOYUB2T", "ZNV-1FZPQX9H", "ZNV-ORUGTCIU", "ZNV-96NCHFJD", "ZNV-PSUXREN9", "ZNV-8SIWX9CU", "ZNV-67YLUR51", "ZNV-TVYYD9QW", "ZNV-S2FEH7ZE", "ZNV-EL8XNPPW", "ZNV-7EBBR3D8", "ZNV-CMFRF1M0", "ZNV-JCG8AWXR", "ZNV-NE1KNA8S", "ZNV-1J9OLFQN", "ZNV-C5L37JYU", "ZNV-W4LES76M", "ZNV-BSO5J6JT", "ZNV-C017V7BY", "ZNV-6GFCG24U", "ZNV-OYW4NPQV", "ZNV-EX2NOMX6", "ZNV-4X69K0JD", "ZNV-UILJGJJY", "ZNV-XP7RMNCI", "ZNV-HF1HNG2O", "ZNV-6NEXGT2K", "ZNV-Y0M35AGL", "ZNV-TG9E9KA3", "ZNV-MV5SPAX5", "ZNV-TOHHDJVT", "ZNV-ASHUZ28X", "ZNV-FU1E6DOX", "ZNV-M6YB96DE", "ZNV-7U1YUM14", "ZNV-B51OTPO2", "ZNV-0A1AOLEZ", "ZNV-ZYR20ST8", "ZNV-BHMBUI2L", "ZNV-IIDNBGZK", "ZNV-CUX6SCP8", "ZNV-Z5085D9X", "ZNV-IO69U3IR", "ZNV-TJZNNIW5", "ZNV-LDLTB5LI", "ZNV-8CFCM207", "ZNV-LHPRSF90", "ZNV-8DZ9OFTJ", "ZNV-1RI1EK4Q", "ZNV-3QRSM3AC", "ZNV-ZF8WFTY0", "ZNV-39QMT7WN", "ZNV-VX7PU4JU", "ZNV-QKXLX326", "ZNV-01WFEHOD", "ZNV-MM0D0NLV", "ZNV-XP7870IW", "ZNV-YVDOMUXN", "ZNV-TSN22VEM", "ZNV-J2IIVUE4", "ZNV-XLSO1Z4T", "ZNV-Z7JS73TK", "ZNV-3073FXNZ", "ZNV-UIHC9KQY", "ZNV-R0ASZSO8", "ZNV-K730AYU4", "ZNV-3VYY380V", "ZNV-DELSH7CK", "ZNV-676RN961", "ZNV-60RRI1DW", "ZNV-0GUDTMT8", "ZNV-SGSUQWVP", "ZNV-S2JHLVOC", "ZNV-BO1K28CZ", "ZNV-FMC6MW5N", "ZNV-6Q67BLUT", "ZNV-8IDWI6EN", "ZNV-DDXT3QK9", "ZNV-VHICY7MX", "ZNV-KQU6JGON", "ZNV-YDAATLXQ", "ZNV-AD4AMXVN", "ZNV-H249NCGO", "ZNV-LJ2QECMV", "ZNV-P6FGH8FE", "ZNV-W8TN0Z0M", "ZNV-SH2FRG3M", "ZNV-D8DJMYMK", "ZNV-BLY47SU0", "ZNV-LOX37E8U", "ZNV-CRU6MH9Q", "ZNV-1C2O0ZSX", "ZNV-QIZK6LFF", "ZNV-EHHNH33V", "ZNV-5XYFN3I5", "ZNV-75Z0Z8U8", "ZNV-MVJXW9WT", "ZNV-G0NGC93G", "ZNV-QBD8F4S1", "ZNV-M5Z9SQUE", "ZNV-7WVZGF8T", "ZNV-I198VM59", "ZNV-5C572U8U", "ZNV-IZZFQ3XX", "ZNV-IUBH9XET", "ZNV-Z9P6HNFO", "ZNV-I7VLSBS3", "ZNV-FHQHC0JL", "ZNV-TAM1E29X", "ZNV-BV165NNO", "ZNV-F05J5WU3", "ZNV-WDG7SKFT", "ZNV-N0BX0749", "ZNV-73VTHNHP", "ZNV-PD6BJGVG", "ZNV-1LMO9P9O", "ZNV-EV20TN9E", "ZNV-88U40M6X", "ZNV-O4XCS2DY", "ZNV-2HHFEONX", "ZNV-J9WWBN1J", "ZNV-6BN1XBWN", "ZNV-CF2W5DTS", "ZNV-055N78KK", "ZNV-WCI8P5VL", "ZNV-LNTLHNC3", "ZNV-LQA0S4KK", "ZNV-22NPPX0K", "ZNV-WORK4PGJ", "ZNV-CPZWKX9Z", "ZNV-YOIO4O7V", "ZNV-WY73JQO6", "ZNV-BKAKJHMH", "ZNV-GSSAQOH7", "ZNV-SRXZGRJF", "ZNV-FOKJE6HH", "ZNV-DL1GWK2P", "ZNV-JI8JUH34", "ZNV-SBOT2PC9", "ZNV-OSS3VYMM", "ZNV-0GXPQUKX", "ZNV-QSIJCBBU", "ZNV-4K0S965L", "ZNV-HFXCTTDO", "ZNV-XS80VFXQ", "ZNV-863A6IPH", "ZNV-MGL2UW75", "ZNV-9TI1XVQ1", "ZNV-57KG2Y4W", "ZNV-4XDSBZQR", "ZNV-A4JZ1B1K", "ZNV-OM3ZRILU", "ZNV-0ZS9ICO3", "ZNV-FXC8SU3K", "ZNV-AFZV6GF7", "ZNV-GT8L3HPR", "ZNV-8QXEGE59", "ZNV-ZA4M2WI3", "ZNV-BL3FWEQW", "ZNV-2VV2MAOF", "ZNV-5RHXUIWT", "ZNV-ESGVC7HL", "ZNV-HJP3GR4C", "ZNV-HDP3F6KU", "ZNV-OX92PORU", "ZNV-FWB43CKL", "ZNV-4TJX1H64", "ZNV-PERGEVN1", "ZNV-GC2EBOFT", "ZNV-7PKOIPQI", "ZNV-5Z8MXXF6", "ZNV-0N2DDAXK", "ZNV-9SSOV6Z0", "ZNV-JMPESQ8Y", "ZNV-Z4Z1T8QW", "ZNV-A5E4HNRB", "ZNV-J45VO8ZA", "ZNV-0WSWBBPF", "ZNV-E622XBMS", "ZNV-HIPDWIWL", "ZNV-FJUG98U8", "ZNV-UKJSH32H", "ZNV-ATL7RWMG", "ZNV-UILNCGXS", "ZNV-KSD5BXWJ", "ZNV-Q78L8226", "ZNV-7X29IFOG", "ZNV-QMQJELOZ", "ZNV-Y4T0IWMU", "ZNV-FU8SW925", "ZNV-H2P84FD5", "ZNV-WT8POILF", "ZNV-AVJY0LNS", "ZNV-AX4LF8NE", "ZNV-M9JC2LMV", "ZNV-1TIPS2N1", "ZNV-45ZSXBLC", "ZNV-5I85K9F8", "ZNV-ZOOSIQZW", "ZNV-13XRRQWN", "ZNV-0O6CK1UV", "ZNV-4HPS2IHG", "ZNV-2NLPG9NF", "ZNV-0LM303BO", "ZNV-717XQ7A7", "ZNV-VDIE134F", "ZNV-TX9T097B", "ZNV-0QSOKK52", "ZNV-9Y9HTXJE", "ZNV-H8C0CXB0", "ZNV-ZPK6ZEW3", "ZNV-TG65WO9C", "ZNV-AU274BL1", "ZNV-SELFFH3M", "ZNV-GOIIQN2A", "ZNV-F5HJF9TQ", "ZNV-3PQ0T06V", "ZNV-Y32IRMFD", "ZNV-QLPHHXHH", "ZNV-SQKSGMV6", "ZNV-06VPY8MY", "ZNV-TGYVT32R", "ZNV-HY2PAVUQ", "ZNV-IB60P8JR", "ZNV-FPHL4NNU", "ZNV-G6OS8DOY", "ZNV-IRFKZW21", "ZNV-CJMXC4BY", "ZNV-HM166BG0", "ZNV-O1WEMLQ7", "ZNV-98NMZI9Z", "ZNV-KEDTTUCV", "ZNV-DX6NEBVO", "ZNV-WZXUDKOD", "ZNV-WOKQT50A", "ZNV-XGMAV8A2", "ZNV-L0X6Z9QW", "ZNV-9OBL022V", "ZNV-BU9RQNQB", "ZNV-U2PCEBN8", "ZNV-8FVCY7LV", "ZNV-F4AP19IG", "ZNV-FTMTFL5P", "ZNV-0Q2XVDHW", "ZNV-U9TPB6MC", "ZNV-XP2BE101", "ZNV-9YJ072XY", "ZNV-REK8BM5E", "ZNV-DHDRU4AO", "ZNV-GW3PMT9K", "ZNV-L9MOMSKS", "ZNV-IP6KGGNL", "ZNV-PAINM8WJ", "ZNV-TM88JBGO", "ZNV-VXG3AC1H", "ZNV-NWCTKV0W", "ZNV-I4SB5QVL", "ZNV-01LKDQTA", "ZNV-7P7P397S", "ZNV-BNFF47CI", "ZNV-R9Z9J5TZ", "ZNV-C317PDGZ", "ZNV-CHWV7IZ9", "ZNV-X8ZR6EF4", "ZNV-IABM0HWS", "ZNV-DKFPHOSW", "ZNV-PE46NHT5", "ZNV-PNAJD5QM", "ZNV-ZEFWZQHK", "ZNV-2B5S4SXB", "ZNV-YUKCFH02", "ZNV-24994KR7", "ZNV-4YVC6OR8", "ZNV-VJ1P0FKN", "ZNV-F2KPL56B", "ZNV-F1Q1ZJ8G", "ZNV-61FIPU6O", "ZNV-Y5E63Z37", "ZNV-JBAJKX30", "ZNV-YMZBYP4A", "ZNV-ECE8YJEF", "ZNV-BW20KL04", "ZNV-AHEBJSM8", "ZNV-0Q49545X", "ZNV-SSDDUA8L", "ZNV-GGMAVQX8", "ZNV-29E5HWC1", "ZNV-8JI0R8BO", "ZNV-YZVD69L6", "ZNV-OKDBMUZQ", "ZNV-NI14ISJU", "ZNV-VW0NTZEH", "ZNV-7NIRAAZS", "ZNV-W4CGXQK0", "ZNV-8KOTAO11", "ZNV-K4BMY60G", "ZNV-USQU1TOH", "ZNV-MBUPF9CE", "ZNV-TNVSQE6A", "ZNV-LFLO3KKI", "ZNV-AFASOCFM", "ZNV-6KCE5GH5", "ZNV-KW6DXVE7", "ZNV-BZWE8N3W", "ZNV-LGDRWGE6", "ZNV-MLST32YU", "ZNV-WEMXF3S3", "ZNV-FW2BH3MF", "ZNV-0PW5G6YG", "ZNV-X00BIRNO", "ZNV-B0FV584K"];
/* =================== Practice =================== */
var lbTestId=null;
function isTestLocked(id){return !isPremium()&&FREE_TEST_IDS.indexOf(id)<0}
function markPayStarted(){try{localStorage.setItem('zhub_pay_started',String(Date.now()))}catch(e){}}
function payRecentlyStarted(){try{return Date.now()-(+localStorage.getItem('zhub_pay_started')||0)<3*60*60*1000}catch(e){return false}}

function startPractice(testId){
  if(isTestLocked(testId)){nav('#/practice/premium');return}
  if(anyExam()){toast('Finish or resume your current exam first.');return}
  subjCtx={type:'practice',testId:testId,back:'#/practice'};
  if(!S.combo){selected=['eng'];nav('#/practice/subjects');return}
  confirmStart();
}
function openPHistory(i){S.lastAttempt=S.pHistory[i];nav('#/practice/results')}
function renderPractice(){
  S.last='practice'; persist();
  var hs=S.pHistory, n=hs.length;
  $('p-n').textContent=n;
  $('p-b').textContent=n?Math.max.apply(null,hs.map(function(x){return Math.round(x.score/x.total*100)}))+'%':'--';
  $('p-resume').innerHTML=EXresumable('practice')?'<div class="panel live"><h3>You have a test in progress</h3><p>Pick up where you stopped. The clock kept running.</p><button class="btn full" onclick="resumeExam()">Resume test</button></div>':'';
  $('p-banner').innerHTML=isPremium()?'':'<div class="banner"><div style="flex:1"><h3>Unlock all practice tests</h3><p>Get Practice Tests 2 to 5 and enter every prize challenge for &#8358;'+PREMIUM_PRICE+', one time.</p></div><button class="btn amber sm" onclick="nav(\'#/practice/premium\')">Unlock</button></div>';
  $('p-tests').innerHTML=PRACTICE_TESTS.map(function(t,i){
    var tries=hs.filter(function(x){return x.testId===t.id}), bs=tries.length?Math.max.apply(null,tries.map(function(x){return x.score})):null;
    if(isTestLocked(t.id)) return '<div class="tcard"><span class="tnum"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><use href="#i-lock"/></svg></span><div class="tinfo"><h3>'+esc(t.name)+'</h3><p>Premium. '+esc(t.desc)+'</p></div><button class="btn amber sm" onclick="nav(\'#/practice/premium\')">Unlock</button></div>';
    var line=bs!==null?'Best '+bs+'/400, '+tries.length+' attempt'+(tries.length===1?'':'s'):esc(t.desc);
    return '<div class="tcard"><span class="tnum">'+(i+1)+'</span><div class="tinfo"><h3>'+esc(t.name)+'</h3><p>'+line+'</p></div><button class="btn sm" onclick="startPractice(\''+t.id+'\')">'+(tries.length?'Retake':'Start')+'</button></div>';
  }).join('');
  $('p-hist').innerHTML=n?hs.slice(-10).reverse().map(function(x){var idx=hs.indexOf(x);
    return '<button class="hrow" onclick="openPHistory('+idx+')"><div><div class="m">'+esc(x.testName||'Practice test')+'</div><div class="d">'+esc((x.subjects||[]).join(', '))+'</div></div><div class="sc">'+x.score+'/'+x.total+'</div></button>'}).join('')
    :'<div class="empty z"><h3>No attempts yet</h3><p>Your scores will show up here after your first test.</p></div>';
  $('p-chg').style.display=S.combo?'inline-block':'none';
}

/* challenges + leaderboard */
function completedTestIds(hist){
  hist=hist||S.pHistory; var o={};
  hist.forEach(function(h){ if(h.answered===undefined||h.answered>=(h.rawTotal||0)*COMPLETE_MIN_ANSWERED) o[h.testId]=1 });
  return o;
}
function challengeProgress(c){
  var hist=S.pHistory||[];
  if(c.type==='complete-all'){
    var d=completedTestIds(hist), done=PRACTICE_TESTS.filter(function(t){return d[t.id]}).length;
    return {won:done>=PRACTICE_TESTS.length,done:done,need:PRACTICE_TESTS.length,best:null};
  }
  var rel=hist.filter(function(h){return !c.test||h.testId===c.test});
  var best=rel.length?Math.max.apply(null,rel.map(function(h){return h.score})):null;
  return {won:best!==null&&best>=c.min,best:best};
}
function renderPBoard(){
  $('ch-list').innerHTML=CHALLENGES.map(function(c){
    var p=challengeProgress(c), bd=c.status==='closing'?['closing','Closing soon']:c.status==='closed'?['closed','Closed']:['open','Open'], prog='', act;
    if(c.type==='complete-all') prog='<div class="bar"><i style="width:'+Math.round(p.done/p.need*100)+'%"></i></div><p class="ptext">'+p.done+'/'+p.need+' practice sets completed</p>';
    else if(p.best!==null) prog='<p class="ptext">Your best: '+p.best+'/400. Target: '+c.min+'</p>';
    if(p.won) act='<button class="btn amber full" onclick="claimPrize(\''+c.id+'\')">You won! Claim prize</button>';
    else if(c.status==='closed') act='<button class="btn ghost full" disabled>Challenge closed</button>';
    else act='<button class="btn full" onclick="joinChallenge(\''+c.id+'\')">Join challenge</button>';
    return '<div class="ch"><div class="top"><h3>'+esc(c.title)+'</h3><span class="badge '+bd[0]+'">'+bd[1]+'</span></div><p class="d">'+esc(c.desc)+'</p>'+
      '<div class="meta"><div><span>Prize</span><b>'+esc(c.prize)+'</b></div><div><span>Deadline</span><b>'+esc(c.deadline)+'</b></div></div>'+prog+act+'</div>';
  }).join('');
  renderPLb();
}
function joinChallenge(id){
  var c=CHALLENGES.filter(function(x){return x.id===id})[0]; if(!c) return;
  var tid=c.test;
  if(c.type==='complete-all'){var d=completedTestIds(), nx=PRACTICE_TESTS.filter(function(t){return !d[t.id]})[0]; tid=nx?nx.id:null}
  if(tid) startPractice(tid); else nav('#/practice');
}
function claimPrize(id){
  var c=CHALLENGES.filter(function(x){return x.id===id})[0]; if(!c) return;
  var p=challengeProgress(c), detail=c.type==='complete-all'?'Completed all 5 practice sets':'Score: '+p.best+'/400';
  window.open(waLink('I just won a prize!\nName: '+myName()+'\nChallenge: '+c.title+'\nPrize: '+c.prize+'\n'+detail),'_blank');
}
function renderPLb(){
  if(!lbTestId){var last=S.pHistory[S.pHistory.length-1]; lbTestId=last&&last.testId?last.testId:PRACTICE_TESTS[0].id}
  $('lb-test').innerHTML=PRACTICE_TESTS.map(function(t){return '<option value="'+t.id+'"'+(t.id===lbTestId?' selected':'')+'>'+esc(t.name)+'</option>'}).join('');
  var el=$('plb'), asked=lbTestId; el.innerHTML='<div class="empty">Loading rankings...</div>';
  db.collection('practiceResults').where('testId','==',asked).get().then(function(snap){
    if(asked!==lbTestId) return;
    var best={}; snap.docs.forEach(function(d){var v=d.data(),k=v.uid||d.id; if(!best[k]||v.score>best[k].score) best[k]={name:v.name,score:v.score,total:v.total,me:!!user&&v.uid===user.uid}});
    var rows=Object.keys(best).map(function(k){return best[k]}).sort(function(a,b){return b.score-a.score}).slice(0,50);
    if(!rows.length){el.innerHTML='<div class="empty z"><h3>No results yet</h3><p>Rankings for '+esc(testName(asked))+' appear as students submit.</p></div>';return}
    el.innerHTML=rows.map(function(r,i){return '<div class="lb '+(r.me?'mine':'')+'"><span class="rk '+(i===0?'t1':'')+'">'+(i+1)+'</span><span class="nm">'+esc(r.name||'Student')+(r.me?' (you)':'')+'</span><span class="sc">'+r.score+'/'+r.total+'</span></div>'}).join('');
  }).catch(function(e){console.error(e);el.innerHTML='<div class="empty z"><h3>Couldn\'t load rankings</h3><p>Check your connection and try again.</p></div>'});
}

/* premium, activation pin, payment return */
function renderPremium(){
  var el=$('pp-card');
  if(isPremium()){
    el.innerHTML='<div style="text-align:center;margin-top:4px"><span class="zen zen-lg"></span></div><h1 style="font-size:24px;margin-top:4px">You\'re Premium</h1><p class="muted" style="margin:6px 0 18px">Every practice test and challenge is unlocked on your account.</p><button class="btn full" onclick="nav(\'#/practice\')">Back to tests</button>';
    return;
  }
  var locked=PRACTICE_TESTS.filter(function(t){return FREE_TEST_IDS.indexOf(t.id)<0});
  var pay=isGuest()
    ?'<button class="btn amber full" onclick="openAuth(\'Create a free account first so Premium stays with you on any phone.\')">Create account to continue</button>'
    :'<a class="btn amber full" href="'+PAYMENT_LINK+'" onclick="markPayStarted()">Pay now &#8358;'+PREMIUM_PRICE+'</a>';
  el.innerHTML='<div style="text-align:center;margin-top:4px"><span class="zen zen-lg"></span></div><h1 style="font-size:24px;margin-top:4px">Unlock Zenova Premium</h1>'+
    '<div class="price">&#8358;'+PREMIUM_PRICE+'<small>One-time payment</small></div>'+
    '<ul class="plist"><li>No monthly subscription</li><li>'+(locked.length?esc(locked.map(function(t){return t.name}).join(', '))+' unlocked':'Every practice test unlocked')+'</li><li>Qualify for every prize challenge</li><li>Instant results and answer review</li><li>Leaderboard ranking on every test</li></ul>'+
    pay+'<p class="muted" style="text-align:center;font-size:12px;margin-top:10px">Secured by Flutterwave</p>'+
    '<p style="text-align:center"><button class="linkbtn" onclick="nav(\'#/practice/activate\')">Already paid? Enter your activation pin</button></p>';
}
function renderActivate(){ $('act-pin').value=''; $('act-msg').textContent=''; $('act-form').style.display='block'; $('act-ok').style.display='none'; }
function submitPin(){
  var msg=$('act-msg'), code=$('act-pin').value.trim().toUpperCase(); msg.textContent='';
  if(!code){msg.textContent='Please enter your activation pin.';return}
  if(isGuest()){openAuth('Create a free account first so Premium stays with you on any phone.');return}
  if(PIN_CODES.indexOf(code)<0){msg.textContent='That pin was not recognized. Please check and try again.';return}
  S.premium=true; S.pin=code; persist();
  db.collection('practiceUsers').doc(user.uid).set({premium:true,activationPin:code,premiumActivatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true}).catch(function(e){console.warn('Cloud sync failed (non-blocking):',e)});
  $('act-form').style.display='none'; $('act-ok').style.display='block';
  setTimeout(function(){nav('#/practice')},1400);
}
function psShowError(html){ $('ps-load').style.display='none'; var b=$('ps-err'); b.innerHTML=html; b.style.display='block'; }
function psShowPin(pin){ $('ps-load').style.display='none'; $('ps-err').style.display='none'; $('ps-pin-v').textContent=pin; $('ps-pin').style.display='block'; $('ps-go').style.display='block'; }
async function runPaymentSuccess(){
  $('ps-load').style.display='block'; $('ps-pin').style.display='none'; $('ps-err').style.display='none'; $('ps-go').style.display='none';
  $('ps-help').href=waLink('I just paid for Zenova Premium and need help with my activation pin');
  if(!authReady||!user) return;   /* auth callback re-renders this page once Firebase is ready */
  if(isGuest()){ psShowError('Create a free account first, then this page will give you your activation pin.<br><button class="linkbtn" onclick="openAuth(\'Create a free account to get your Premium activation pin.\')">Create account</button>'); return; }
  if(S.pin){ S.premium=true; persist(); psShowPin(S.pin); return; }
  if(REQUIRE_PAYMENT_PARAMS){
    var okStatus=PAY_STATUS&&['successful','completed'].indexOf(PAY_STATUS.toLowerCase())>=0, cancelled=!!PAY_STATUS&&!okStatus;
    var confirmed=(okStatus&&PAY_REF)||(!PAY_STATUS&&!PAY_REF&&payRecentlyStarted());
    if(!confirmed){
      psShowError(cancelled?'Your payment was not completed, so no pin was issued. You can try again from the Premium page.'
        :'We could not confirm your payment on this page. If you have paid, <a class="linkbtn" href="'+waLink('I paid for Zenova Premium but could not get my activation pin')+'" target="_blank" rel="noopener">message us on WhatsApp</a> with your receipt and we will send your pin.');
      return;
    }
  }
  var userRef=db.collection('practiceUsers').doc(user.uid), poolRef=db.collection('meta').doc('practicePinPool');
  try{
    var pin=await Promise.race([
      db.runTransaction(async function(tx){
        var ud=await tx.get(userRef);
        if(ud.exists&&ud.data().activationPin) return ud.data().activationPin;
        var pd=await tx.get(poolRef), idx=pd.exists?(pd.data().nextIndex||0):0;
        if(idx>=PIN_CODES.length) throw new Error('OUT_OF_PINS');
        var code=PIN_CODES[idx];
        tx.set(poolRef,{nextIndex:idx+1},{merge:true});
        tx.set(userRef,{activationPin:code,premium:true,paymentRef:PAY_REF||null,premiumActivatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});
        return code;
      }),
      new Promise(function(_,rej){setTimeout(function(){rej(new Error('TIMEOUT'))},10000)})
    ]);
    S.premium=true; S.pin=pin; persist(); try{localStorage.removeItem('zhub_pay_started')}catch(e){}
    psShowPin(pin);
  }catch(err){
    var w=function(t){return '<a class="linkbtn" href="'+waLink(t)+'" target="_blank" rel="noopener">message us on WhatsApp</a>'};
    if(err&&err.message==='OUT_OF_PINS') psShowError('All activation pins have been assigned. Please '+w('I paid but no activation pin was available')+' and we will sort you out right away.');
    else if(err&&err.message==='TIMEOUT') psShowError('This is taking longer than expected. Please '+w('I paid for Zenova Premium but my activation pin did not load')+' with your receipt.');
    else { console.warn('Pin assignment failed:',err); psShowError('We could not generate your pin automatically. Please '+w('I paid for Zenova Premium but could not get my activation pin')+' with your payment receipt.'); }
  }
}
function copyPin(){
  var b=$('ps-copy');
  navigator.clipboard.writeText($('ps-pin-v').textContent).then(function(){b.textContent='Copied!';setTimeout(function(){b.textContent='Copy pin'},1800)}).catch(function(){b.textContent='Press and hold the pin to copy'});
}


