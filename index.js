//NPMs
'use strict';
const snoowrap = require('snoowrap');
const nbayes = require('nbayes');

//Teaching classifier some keywords
const classifier = nbayes();
classifier.learn("Art", nbayes.stringToDoc('visual, dnd, abstraction,abundance,aesthetic,art,art form,art gallery,art style,artist,artistic career,artistic endeavor,artistic expression,artistic genius,artwork,assemblage,balance,beauty,body of work,brushwork,camera,canvas,character,collection,collector,color,complexity,composition,concept,conception,contrasts,conviction,creative approach,creativity,dedication,depth,masterpiece,mastery,maturity,meaning,medium,method,mixed media,mood,motif,movement,museum,mystique,narrative,nuance,painting,palette,panel,passion,patron,pattern,perception,perspective,philosophy,photo,photograph,picture,piece,portrait,preoccupation,print,process,purity,quality,reaction,realm,detail,diptych,draftsmanship,duality,element,exhibition,exploration,expression,figure,form,format,gallery,growth,hanging,hue,icon,iconic value,ideal,illustration,image,imagery,impact,innovation,inspiration,installation,instinct,intensity,interaction,interpretation,intricacies,journey,juxtaposition,labyrinth,landscape,luminosity,reflection,representation,scene,scenery,sculptor,sculpture,self-portrait,sensation,sensitivity,sensuality,series,shading,show,skill,space,splendor,style,subconscious,subject,subject matter,symbol,symbolism,talent,taste,technique,texture,theme,transformation,triptych,understanding,urge,viewer,viewing,vision,visualization'));
classifier.learn("Business & Finance", nbayes.stringToDoc('money, accounts payable, accounts receivable, adjusting/closing entries, analysis/analyzing, assets, asset management, audit/auditing/audit controls, balance sheet, benefits administration, billing, bond(s), budget/budgeting/budget control, business plan, buyout, campaign, capital budget, cash flow, cash management, chart of accounts, client/client base, collections, commercial lending, compliance, consumer lending, contract management, corporate governance, corporate treasury, cost accounting, cost benefit analysis, cost of goods sold (cogs), cost reduction and avoidance, credit management, debt, debt management, debt refinancing, debt service, debt to worth, depreciation/accelerated depreciation, disbursements, discount cash flow, dividend(s), due diligence, ebit/ebitda, efficiencies, equity, equity underwriting, expenditures, expense analysis, (fasb) financial accounting standards,oard, fast-paced, feasibility, financial analysis, financial modeling, financial planning, financial reporting, financial statements, fixed assets, fixed cost, forecast/forecasting, foreign exchange, gaap, general accounting, general ledger, globalization, goal(s), guarantee/guarantor, high stress, inflow/outflow, interest rate(s), international financial reporting,tandards, internal controls, inventory control, inventory management, investment analysis/management, investment finance, investor relations, initial public offering (ipo), invoice, job (order) costing, journal/journaling, loan administration, lending, letter of credit, liabilities/liability, liquidity, management reporting, markets, mergers and acquisitions, money, mutual fund(s), net present value (npv), net worth, operating reports, option(s), overhead, payroll administration, policies, procedures, process/processing, process improvement, profit and loss analysis, profit and loss statement (p&l), projections, public speaking, purchase accounting, quarterly/year-end reporting, real estate, receipts, reconciliations, records, regulations, relationship management, reporting and analysis, revenue, reverse takeover, risk management, roe/roi/roa, sarbanes oxley, securities, shareholder, spreadsheets, standards, strategic planning, statistical models, stock(s), supplier, tax accounting, taxation, technology, transaction, treasury, trend analysis, underwriting, valuation, variance analysis, vendor, venture capital, yield'));
classifier.learn("Health & Safety", nbayes.stringToDoc('death, heart attack, blind, blindness, covid, endemic, epidemic, pandemic, health,safety,physiotherapy,healthcare,hazards,falling,obesity,personal protective equipment,wholesome,discipline,medicine,psychology,epidemiology,healthiness,burn,cutting,shearing,stabbing,wound,anthrax,influenza,,healthful,quality of life,healthy,drowning,urushiol,fitness,longevity,occupational therapy,workout,jog,occupational medicine,breathlessness,human factors and ergonomics,calisthenics,prevention,wellness,exercise,aerobics,manufacturing,otto von bismarck,aerobic,stretch,physical hazard,nonjogging,excercise,warmdown,overwork,physiotherapist,diet,underexercise,unexercised,healthful,jazzercise,impact force,exercisable,tiredness,physiculture,ameliorate,heal,exergaming,exergame,biological hazard,ohsas 18001,bodybuilding,sweat,condition,prosperity,integrity,become strong,perspiration,perspire,stay healthy,veterinary medicine,osha,long life,caffeine,blood-borne disease,emerging infectious disease,chemical hazards,occupational exposure limit,betterhood,musclebound,psychosocial hazard,cochrane review,eat right,live long,meliorate,eat healthily,maintain good health,aquacise,lose weight,good health,unsweat,sweatpants,maintain muscle strength,jogger,fit,lift weight,get in shape,live long time,improve health,keep healthy,it be healthy,productivity,health and safety executive,exercise regularly,feel healthy,join gym,go to gym,look attractive,build muscle,work out,increase muscle mass,eat less,live long life,lose weight,cardiopulmonary exercise,eat well,do exercise,eat vegetable,physical fitness,stretch first,stay in shape,become more healthy,workplace violence,get healthy,tone up,take vitamin,be physically fit,get exhaust,go on walk,be fit,secure,sanitation,safe,unsafe,insurance,danger,conservation,assurance,caution,care,breathe heavily,fda,information,patients,precautions,limber up,evaluation,patient,cautions,sanitary,paramedics,vaccination,strength,mask,smog,risk,medicare,recover,radon,prophylaxis,privacy,preventive,precarious,bath,benefit,benefits,benign,biohazard,coverage,insured,environmental,fat,injury,hazard,hygienic,hygiene,hospital,dss,sweat,pull muscle,feel fit,healthy live,run,exercise machine,fitness center,be in shape,keep in shape,weight loss,wear jog shoe,roll over protection structures,keep fit,maintain health,jog,get fresh air,eat healthy,have more energy,go jog,get exercise,sedentary lifestyle,shortness of breath,good shoe,strength train,be fat,stay young,physical therapy,sore muscle,get tire,run in marathon,occupational stress,be overweight,feel good,fat person,warm down,look good,workplace bullying,visit doctor,shin splint,become exhaust,ride bicycle,live good life,passive smoking,staph,well-being,break sweat,warm up,be tall,run marathon,self motivation,self esteem,long lifespan,ride bike,health club,physical education,low blood pressure,learn to dance,physical activity,tune up,live well,stop smoke,get enough sleep,occupational fatality,get well,heart attack,breathe fresh air,gymnastic apparatus,push up,good body,strong body,strong bone,good life,safety culture,personal fulfillment,health physics,member state,hierarchy of hazard control,group insurance,occupational safety and health administration,general duty clause,musculoskeletal disorders,risk assessment,raising awareness,risk factor'));
classifier.learn("Politics & Religion", nbayes.stringToDoc('dictator, dictators, equity, inequality, equality, justice, campaigning,government,backroom,civics,electioneering,jungle,legislature,polity,statecraft,zoo,affairs of state,domestic affairs,foreign affairs,government policy,hat in the ring,internal affairs,matters of state,political science,smoke-filled room,stateship,church,creed,cult,denomination,doctrine,morality,myth,mythology,prayer,ritual,sect,spirituality,superstition,theology,communion,devotion,observance,orthodoxy,pietism,piety,preference,religiosity,rites,sacrifice,sanctification,standards,veneration,higher power,spiritual-mindedness,affiliation,body,chapter,communion,congregation,connection,creed,cult,denomination,doctrine,faction,faith,gathering,ism,order,persuasion,religion,schism,sect,society,address,artfulness,craft,delicacy,delicatesse,discretion,expedience,finesse,negotiation,poise,politics,savoir-faire,skill,statecraft,subtlety,Uncle Sam,Washington,authority,bureaucracy,command,control,direction,domination,dominion,empire,execution,executive,governance,guidance,influence,jurisdiction,law,ministry,patronage,political practice,politics,polity,power,powers-that-be,predominance,presidency,regency,regime,regimentation,regulation,restraint,rule,sovereignty,state,statecraft,superintendence,superiority,supervision,supremacy,sway,the feds,union,canon,church,communion,confession,connection,conviction,credo,creed,cult,denomination,doctrine,dogma,doxy,gospel,orthodoxy,persuasion,piety,piousness,principle,profession,religion,revelation,sect,teaching,tenet,theism,theology,worship'));
classifier.learn("Geography & History", nbayes.stringToDoc('united states, elevation, africa, antarctica, europe, asia, north america, south america, australia, earth science,geology,geopolitics,topography,cartography,physiography,topology,chorography,geopolitical study,physiographics,area,bearings,district,environment,fix,geography,ground,locale,locality,location,locus,point,post,reference,region,scene,seat,setting,site,situation,space,spot,stand,station,surroundings,topography,tract,whereabouts,past,antiquity,yesterday,yesteryear,ancient times,bygone times,days of old,days of yore,good old days,old days,olden days,annals,archives,diary,history,journal,narration,prehistory,recital,record,recountal,register,report,story,version,ancestry,blood line,derivation,descent,extraction,generation,genetics,heredity,history,line,lineage,parentage,pedigree,progeniture,stemma,stirps,stock,strain'));
classifier.learn("Science & Mathematics", nbayes.stringToDoc('astronomy,astrophysics,atom,beaker,biochemistry,biology,botany,Bunsen burner,burette,cell,chemical,chemistry,climate,climatologist,control,cuvette,data,datum,electricity,electrochemist,element,energy,entomology,evolution,experiment,fact,flask,fossil,funnel,genetics,geology,geophysics,glassware,graduated cylinder,gravity,herpetology,hypothesis,ichthyology,immunology,lab,laboratory,laws,lepidoptery,magnetism,mass,matter,measure,meteorologist,meteorology,microbiologist,microbiology,microscope,mineral,mineralogy,molecule,motion,observatory,observe,organism,ornithology,paleontology,particle,Petri dish,phase,physical science,physics,pipette,quantum mechanics,radiology,research,retort,scale,science,scientist,seismology,telescope,temperature,test tube,theory,thermometer,tissue,variable,virologist,volcanology,volume,volumetric flask,watch glass,weather,weigh,zoology,algebra,calculation,calculus,geometry,math,addition,division,figures,multiplication,numbers,subtraction,trigonometry, arithmetic, calculation, calculus, ciphering, computation, figures, figuring, math, number crunching, numbers, reckoning'));
classifier.learn("Food & Cooking", nbayes.stringToDoc('burger, burgers, artichoke,aubergine,asparagus,legumes,alfalfa sprouts,azuki beans,bean sprouts,black beans,black-eyed peas,borlotti bean,broad beans,chickpeas, garbanzos, or ceci beans,green beans,kidney beans,lentils,lima beans or butter bean,mung beans,navy beans,peanuts,pinto beans,runner beans,split peas,soy beans,peas,mangetout or snap peas,broccoflower,broccoli,brussels sprouts,cabbage,kohlrabi,Savoy cabbage,red cabbage,cauliflower,celery,endive,fiddleheads,frisee,fennel,greens,bok choy,chard (beet greens),collard greens,kale,mustard greens,spinach,herbs,anise,basil,caraway,coriander,chamomile,daikon,fennel,lavender,cymbopogon ,marjoram,oregano,parsley,rosemary,thyme,lettuce,arugula,mushrooms ,nettles,New Zealand spinach,okra,onion,chives,garlic,leek,onion,shallot,scallion ,peppers ,bell pepper,chili pepper,jalapeño,habanero,paprika,tabasco pepper,cayenne pepper,radicchio,rhubarb,root vegetables,beetroot  beet,mangel-wurzel,carrot,celeriac,corms,eddoe,konjac,taro,water chestnut,ginger,parsnip,rutabaga,radish,wasabi,horseradish,Diakon or white radish,tubers,jicama,jerusalem artichoke,potato,sweet potato,yam,turnip,spinach,salsify (Oyster Plant),skirret,sweetcorn,topinambur,squashes ,acorn squash,bitter melon,butternut squash,banana squash,courgette (UK), Zucchini (US),cucumber,delicata,gem squash,hubbard squash,marrow (UK) Squash (US),spaghetti squash,tat soi,tomato,watercress,onions, fruit, vegetable, bread,cooking,cuisine,drink,fare,feed,foodstuff,meal,meat,snack,aliment,bite,board,chow,comestible,cookery,diet,eatable,eats,fodder,goodies,grit,groceries,grub,handout,larder,menu,mess,nourishment,nutriment,nutrition,pabulum,provision,ration,refreshment,slop,store,subsistence,sustenance,tuck,viand,victual,entrée,fast food,home cooking,moveable feast,take out,vittles,baking,boiling,brewing,broiling,browning,frying,grilling,heating,roasting,simmering,sizzling,steaming,steeping,stewing,toasting,al dente,au gratin ,au jus,au sec,barding ,baste,blanch,broil,braise,brining,blend,bone,butterfly,cartouche,clarify,coddle,consommé ,coring,confit,cure,curdle,cut in,dice,dollop,dredging,dress,deep fry,deglaze,effiler,flambé,fillet,flake,frenching,grill,glaze,gratin,grease,grind,hull,infuse,jacquarding,jus lie,julienne,knead,larding,liaison,macerate,marinate,mince,mise en place,nappe,needling,parcooking,paupiette,pané,panade,parboil,poach,purée,pickle,reduce,render,roast,roux,reconstitute,refresh,sauté,scald,steep,shallow fry,simmer,skim,steam,sear or brown,sweat,score,temper,tourner,truss,ultra-pasteurization,vandyke,velouté,whip,whisk,zest'));
classifier.learn("Love & Relationships", nbayes.stringToDoc('boyfriend, girlfriend, husband, wife, significant other, affection,appreciation,devotion,emotion,fondness,friendship,infatuation,lust,passion,respect,taste,tenderness,yearning,adulation,allegiance,amity,amorousness,amour,ardor,attachment,case,cherishing,crush,delight,devotedness,enchantment,enjoyment,fervor,fidelity,flame,hankering,idolatry,inclination,involvement,like,partiality,piety,rapture,regard,relish,sentiment,weakness,worship,zeal,ardency,mad for,soft spot,accord,affair,communication,contact,exchange,liaison,link,marriage,rapport,relation,tie,affiliation,affinity,alliance,analogy,appositeness,association,bond,conjunction,consanguinity,contingency,correlation,dependence,dependency,homogeneity,hookup,interconnection,interrelation,interrelationship,kinship,likeness,nearness,network,parallel,pertinence,seductive,self-confident,self-driven,selfless,sensitive,sensual,sentimental,sexual,sexy'));
classifier.learn("Home & Auto", nbayes.stringToDoc('general repair,auto repair,oil change,brake repair,transmission repair,tire repair,wheel alignment,hybrid repair,emissions testing,check engine light,car inspection,a-pillar,active suspension,aerodynamic drag,air dam,anti-dive,anti-lock braking system,anti-roll bar,anti-squat,apex,aspect ratio,axle tramp,b-pillar,balance shaft,ball joint,beam axle,beltline,bevel gears,boost pressure,brake bias,brake modulation,brake torquing,breathing (engine),bushing,c-pillar,cam profile,camber,camshaft,carbon fiber,caster,catalytic converter,center differential,chassis,coil spring,combustion chamber,compliance,composite,compression ratio,connecting rod,constant-velocity joint,control arm,cornering limit,coupe,crankshaft,cylinder,cylinder head,cylinder liner,dba,de dion suspension,dead pedal,detonation,differential,disc brakes,dive,dohc,downforce,drag coefficient,drivability,driveline,driveshaft,drivetrain,drum brakes,exhaust-gas recirculation,engine control system,epa fuel economy,exhaust manifold,exhaust port,feedback fuel-air-ratio control,fiberglass,final-drive ratio,floorpan,fluid coupling,flywheel,four valves per cylinder,four-wheel drift,four-wheel steering,fuel injection,gearset,greenhouse,ground effect,half-shaft,handling,heel-and-toe,heim joint,helical gear,hemi,horsepower,hotchkiss suspension,hydraulic lifter,independent suspension,intake charge,intake manifold,intake port,intercooler,jounce,jounce bumper,kickdown,knock sensor,lateral link,leading link,leaf spring,lift,lift-throttle oversteer,limited-slip differential,line,link,live axle,lockup,locking differential,locking torque converter,loose,main bearings,mid-engine,monocoque,multileaf spring,multilink suspension,neutral steer,on-center feel,opposite lock,overdrive,overhead cam,oversquare,oversteer,panhard rod,pent-roof,pitch,planetary gears,plenum chamber,polar moment of inertia,port fuel injection,pound-feet,power,power band,powertrain,profile,progressive-rate spring,psi,push,pushrod,rack-and-pinion,rebound,recirculating-ball,redline,ride height,ride steer,rigid axle,ring-and-pinion gear,roadholding,road-load horsepower,roll,rubber-isolated crossmember,sae: society of automotive engineers,scrub radius,sedan,semi-elliptic leaf spring,semi-trailing-arm suspension,series (tire),shift gate,shock absorber,single-rate spring,skidpad,slip angle,slushbox,sohc,space frame,spoiler,squat,steering axis,steering feel,steering gain,steering geometry,steering response,straight-line tracking,stroke,strut,sump,supercharger,targa,throttle-body,throttle-body fuel injection,toe-control link,toe-in,toe steer,torque,torque converter,torque steer,torsion bar,traction control,trail-braking,trailing arm,trailing link,transaxle,transmission,tread squirm,tube frame,tumblehome,tuned intake and exhaust systems,turbocharger,turbo lag,turn-in,understeer,unitized construction,universal joint,valve float,valve lifter,valvetrain,viscous coupling,waste gate,wheel hop,yaw,zero-offset steering,110 line,220 line,acrylic paint,allowance,aluminum paint,angle stop or angle supply,architect,asbestos,awning window,back priming,baseboard,basin,bay window,bid,bidet,blistering,blueprints,blushing,bond or bonding,bow window,cabinet soffit,casement window,casing,caulking,change order,circuit breaker,colorant,concrete,concrete board or wonder board,construction contract,construction schedule,cost-plus contract,cycle time,deed,designer,diverter,door header,double glazing,double hung window,drop-sheet or drop cloth,dry rot,drywall or gypsum wallboard,eggshell,elongated bowl,enamel,energy star,estimating,expansion joint,fiberglass,finish coat,fixed price contract,fixture,flat,floor area,floor plan,forced air heating,frame wall,french hinged door,frieze,fuse,general contractor,generator,gfci,gloss,gpf or gallons per flush,graining,grout,hand shower,hardboard,hearth,hot-water heating,hvac,i-beam,industrial paint,insulating glass,insulation,jamb,jet,knot,landing,latex paint,linseed oil,low consumption toilet,one-piece toilet,open-front toilet,panel,payment schedule,permit,plywood,pop-up assembly,pressure balance valve,pressure relief valve,punch list,pvc or cpvc,remodeling contractor,riser,round-front bowl,r-value,schematic drawing,scope of work,setback thermostat,single glazing,siphoning,soffit,specialty contractor,specifications or specs,standard practices of the trades,subcontractor,three-way switch,time & materials contract,tongue & groove,tread,trim,tube & knob wiring,two-piece toilet,undercoat,vanity,vessel,walkthrough,water-saving toilet,watt,weather-stripping,zoning'));
classifier.learn("Animals & Nature", nbayes.stringToDoc('dog, giraffe, crow, raven, amphibious,androgynous ,anthropoid ,aquatic ,arboreal,articulate ,asexual,best-of-breed,caged,captive,cold-blooded,common,diurnal,domestic,domesticated,downy,draft,endangered,endemic,extinct,feathered,feral,fluffy,flying,freshwater,furred,furry,covered with fur,giant,great,gregarious,higher,horned,with horns,housebroken,house-trained,indigenous,juvenile,lesser,lop-eared,man-eating,mangy,mature,migratory,native,naturalized,nocturnal,omnivorous,parasitic,pedigree,petrified,pigmy,poisonous,polymorphous,predatory,purebred,pygmy,rabid,rogue,saltwater,savage,scaly,shy,simian,social,spineless,stuffed,tame,temperate,territorial,threatened,tolerant,transgenic,tufted,untrained,venomous,warm-blooded,webbed,web-footed,well-bred,wild,wildness,winged,global warming,water,earth,nature,solar energy,polar bears,recycling,pollution,green,solar power,endangered species,air pollution,water pollution,solar panels,electric cars,wind energy,climate change,tankless water heater,wind power,recycle,geothermal energy,hybrid cars,waste management,deforestation,tankless water heaters,planet earth,epa,greenhouse effect,environment,effects of global warming,planet,solar,science news,fossil fuels,oil prices,global warming,wildlife,natural resources,sustainability,solar cells,alternative energy,water heaters,green guy,mother earth news,solar panel,earth day,bottled water,climate map,carbon dioxide,climate graphs,human nature,what is global warming,water conservation,thermal energy,free energy,ocean pollution,renewable energy,endangered species list,price of oil,ecology,popular science,organic,peak oil,going green,fuel cells,kyoto protocol,global warming,electronic waste,solar powered cars,land pollution,composting,energy star,an inconvenient truth,department of energy,hybrid vehicles,environmental issues,solar water heater,recycling facts,greenhouse gases,global warming facts,compost,organic food,green building,consequences of global warming,science magazine,solar cell,mother earth,go green,genetically modified food,solar dryer,earth science dictionary,national wildlife federation,earth science,noise pollution,carbon footprint,energy conservation,hybrid car,conservation,photovoltaic,dog,puppy,turtle,rabbit,parrot,cat,kitten,goldfish,mouse,tropical fish,hamster,pets,farm & domestic animals,wild animals,mammals,sea animals,birds,insects,cow,rabbit,ducks,shrimp,pig,goat,crab,deer,bee,sheep,fish,turkey,dove,chicken,horse,squirrel,dog,chimpanzee,ox,lion,panda,walrus,otter,mouse,kangaroo,goat,horse,monkey,cow,koala,mole,elephant,leopard,hippopotamus,giraffe,fox,coyote,hedgehong,sheep,deer,crab,fish,seal,octopus,shark,seahorse,walrus,starfish,whale,penguin,jellyfish,squid,lobster,pelican,clams,seagull,dolphin,shells,sea urchin,cormorant,otter,pelican,sea anemone,sea turtle,sea lion,coral,moth,bee,butterfly,spider,ant,dragonfly,fly,mosquito,grasshopper,beetle,cockroach,centipede,worm,louse'));
classifier.learn("Television, Film, & Music", nbayes.stringToDoc('movie, movies, above the line ,aerial shot ,alan smithee film ,ancillary rights ,angle ,angle on ,aperture ,arc shot ,art director ,art-house film ,aside ,aspect ratio ,assembly ,available light ,axis of action ,abby singer ,b-movie ,background artist ,backlighting ,backlot ,balance ,barn doors ,barney ,below-the-line expenses ,best boy ,blimp ,blocking ,blue screen ,boom microphone ,bounce board ,bracketing ,call sheet ,cel ,cheater cut ,cinematographer ,clapboard ,claymation ,close-up ,colorization ,computer generated imagery (cgi) ,continuous ,crane shot ,cross-cutting ,crossfade ,cut ,cyclorama ,dailies ,deepfocus shot ,depth of field ,diffusion ,directing the eye ,direct sound ,director ,director’s cut ,dolly ,dunning ,dutch tilt ,dynamic frame ,establishing shot ,executive producer ,extremely long shot ,eyeline match ,favor on ,flash cut ,film stock ,foley ,fourth wall ,frame rate ,gaffer ,grip ,head-on shot ,high-angle shot ,highlighting ,into frame ,iris out ,key light ,lap dissolve ,lens ,line producer ,locked-down shot ,low-angle shot ,match cut to ,medium shot ,montage ,ntsc ,off book ,overcranking ,pan ,pipeline ,point of view (pov) ,positive print ,post-production ,producer ,pull back ,push in ,reverse shot ,rigger ,scene  ,screenplay ,screenwriter ,shooting script ,shot ,shot list ,shutter speed ,smash cut to ,soft focus ,soundstage ,spec script ,static shot ,stock shot ,stop motion ,storyboard ,tight on ,tracking shot ,transition ,treatment ,undercranking ,underexposed ,vertigo effect ,wrap ,zoom shot '));
// classifier.learn("Other (etc.)", nbayes.stringToDoc(''));


console.log(classifier.classify(nbayes.stringToDoc('Giraffe spots chart')));
console.log(classifier.classify(nbayes.stringToDoc('Which waters to avoid by region')));
// console.log(classifier.classify(nbayes.stringToDoc('Common sword types').words()));
// console.log(classifier.classify(nbayes.stringToDoc('Crow vs. Raven guide').words()));
// console.log(classifier.classify(nbayes.stringToDoc('An easy guide to fruit').words()));

// NOTE: The following examples illustrate how to use snoowrap. However, hardcoding
// credentials directly into your source code is generally a bad idea in practice (especially
// if you're also making your source code public). Instead, it's better to either (a) use a separate
// config file that isn't committed into version control, or (b) use environment variables.

// Create a new snoowrap requester with OAuth credentials.
// For more information on getting credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper
const r = new snoowrap({
  userAgent: 'CoolGuidesCoolGuide v1.0 (by /u/pbrayer )',
  clientId: 'wPScMTrv4wQpbQ',
  clientSecret: '7OgGn_LaUS3D6BDeOkaRGTuUl1wItA',
  refreshToken: '25833262-ZpXfEWah074qV6L1GtBuTgMBJ_AVwQ'
});

// r.getTop("coolguides").map(post => post.title).then(console.log);

// r.getSubreddit('coolguides').getTop({time: 'year', limit: 100}).map(post => {return {title: post.title, url: post.url}}).then(console.log);






