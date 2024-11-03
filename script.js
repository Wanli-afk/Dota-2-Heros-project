// Sample hero data
const heroes = [
    {
        id: 1,
        name: "Anti-Mage",
        type: "Agility",
        img: "images/Anti-Mage_icon.webp",
        details: "Anti-Mage is a highly mobile hero focused on countering magic users.",
        skills: [
            { name: "Mana Break", description: "Burns an opponent's mana on each attack, dealing additional damage." },
            { name: "Blink", description: "Teleports Anti-Mage to a target point instantly." },
            { name: "Counterspell", description: "Passively grants magic resistance, with an active component to reflect spells." },
            { name: "Mana Void", description: "Damages based on the missing mana of the target and nearby enemies." }
        ]
    },
    {
        id: 2,
        name: "Axe",
        type: "Strength",
        img: "images/Axe_icon.webp",
        details: "Axe is a tanky initiator who excels in the thick of battle.",
        skills: [
            { name: "Berserker's Call", description: "Forces enemies to attack Axe, providing him with bonus armor." },
            { name: "Battle Hunger", description: "Causes an enemy to take damage over time and be slowed." },
            { name: "Counter Helix", description: "Axe has a chance to deal damage to all nearby enemies when attacked." },
            { name: "Culling Blade", description: "Instantly kills a target with low health and boosts Axe's movement speed temporarily." }
        ]
    },
    {
        id: 3,
        name: "Crystal Maiden",
        type: "Intelligence",
        img: "images/Crystal_Maiden_icon.webp",
        details: "Crystal Maiden is a support hero with strong crowd control abilities.",
        skills: [
            { name: "Crystal Nova", description: "Deals damage and slows enemies in an area of effect." },
            { name: "Frostbite", description: "Freezes an enemy in place, dealing damage over time." },
            { name: "Arcane Aura", description: "Provides mana regeneration to Crystal Maiden and her allies." },
            { name: "Freezing Field", description: "Creates an area that deals massive damage and slows enemies." }
        ]
    },
    {
        id: 4,
        name: "Dark Seer",
        type: "Intelligence",
        img: "images/Dark_Seer_icon.webp",
        details: "Dark Seer can manipulate space and create illusions of enemies.",
        skills: [
            { name: "Vacuum", description: "Pulls enemies into a target location, dealing damage." },
            { name: "Ion Shell", description: "Surrounds an ally with a damaging shield that harms nearby enemies." },
            { name: "Surge", description: "Increases the movement speed of an ally to maximum for a short duration." },
            { name: "Wall of Replica", description: "Creates a wall that creates illusions of enemies passing through it." }
        ]
    },
    {
        id: 5,
        name: "Abaddon",
        type: "Strength",
        img: "images/Abaddon_icon.webp",
        details: "Abaddon is a versatile support and tank with healing abilities.",
        skills: [
            { name: "Mist Coil", description: "Releases a coil that heals allies or damages enemies." },
            { name: "Aphotic Shield", description: "Surrounds an ally with a shield that absorbs damage and explodes." },
            { name: "Curse of Avernus", description: "Applies a curse on an enemy, reducing their speed and silence." },
            { name: "Borrowed Time", description: "Abaddon avoids damage for a duration and heals from incoming attacks." }
        ]
    },
    {
        id: 6,
        name: "Alchemist",
        type: "Strength",
        img: "images/alchemist.png",
        details: "Alchemist is a hero with great farming potential and chemical abilities.",
        skills: [
            { name: "Acid Spray", description: "Sprays acid on the ground, damaging enemies in the area." },
            { name: "Unstable Concoction", description: "Brews an explosive concoction that can be thrown at an enemy to stun them." },
            { name: "Greevil's Greed", description: "Increases gold gain from killing enemies." },
            { name: "Chemical Rage", description: "Transforms Alchemist, increasing his health regen and attack speed." }
        ]
    },
    {
        id: 7,
        name: "Ancient Apparition",
        type: "Intelligence",
        img: "images/Ancient_Apparition_icon.webp",
        details: "Ancient Apparition can deal heavy magic damage and slow enemies.",
        skills: [
            { name: "Cold Feet", description: "Freezes the target if they remain in the same area for a duration." },
            { name: "Ice Vortex", description: "Creates a vortex that slows and increases magic damage taken by enemies." },
            { name: "Chilling Touch", description: "Increases the magic damage of attacks and slows enemies." },
            { name: "Ice Blast", description: "Deals damage and prevents healing for a duration to those affected." }
        ]
    },
    {
        id: 8,
        name: "Arc Warden",
        type: "Intelligence",
        img: "images/Arc_Warden_icon.webp",
        details: "Arc Warden is a complex hero with the ability to duplicate himself.",
        skills: [
            { name: "Flux", description: "Slows and damages an enemy, dealing more damage when isolated." },
            { name: "Magnetic Field", description: "Creates a field that grants evasion to allies inside." },
            { name: "Spark Wraith", description: "Summons a wraith that damages an enemy on contact." },
            { name: "Tempest Double", description: "Creates a duplicate of Arc Warden with all of his items and abilities." }
        ]
    },
    {
        id: 9,
        name: "Bane",
        type: "Intelligence",
        img: "images/Bane_icon.webp",
        details: "Bane has powerful single-target disables to control enemies.",
        skills: [
            { name: "Enfeeble", description: "Reduces an enemy's damage and disables their passive abilities." },
            { name: "Brain Sap", description: "Deals damage to an enemy and heals Bane for the same amount." },
            { name: "Nightmare", description: "Puts a target to sleep, dealing damage over time." },
            { name: "Fiend's Grip", description: "Channels to disable an enemy, dealing damage and restoring mana." }
        ]
    },
    {
        id: 10,
        name: "Batrider",
        type: "Intelligence",
        img: "images/Batrider_icon.webp",
        details: "Batrider uses fire and flight to disrupt enemy positioning.",
        skills: [
            { name: "Sticky Napalm", description: "Increases damage taken by affected enemies with each stack." },
            { name: "Flamebreak", description: "Hurls an explosive at the target location, knocking back and damaging enemies." },
            { name: "Firefly", description: "Allows Batrider to fly over obstacles and leaves a burning trail." },
            { name: "Flaming Lasso", description: "Grabs an enemy and drags them, causing damage over time." }
        ]
    },
    {
        id: 11,
        name: "Beastmaster",
        type: "Strength",
        img: "images/Beastmaster_icon.webp",
        details: "Beastmaster commands animals to aid him in battle.",
        skills: [
            { name: "Wild Axes", description: "Throws axes that deal damage to all enemies in their path." },
            { name: "Call of the Wild", description: "Summons a boar or hawk to assist in battle, depending on ability level." },
            { name: "Inner Beast", description: "Passively increases the attack speed of nearby allies." },
            { name: "Primal Roar", description: "Stuns a target and knocks back enemies in the way, dealing damage." }
        ]
    },
    {
        id: 12,
        name: "Bloodseeker",
        type: "Agility",
        img: "images/Bloodseeker_icon.webp",
        details: "Bloodseeker can capitalize on low-health enemies and move quickly.",
        skills: [
            { name: "Bloodrage", description: "Increases an ally's or enemy's damage, but they take more damage as well." },
            { name: "Blood Rite", description: "Calls down a ritual that silences and damages enemies in the area." },
            { name: "Thirst", description: "Passively grants movement and attack speed based on enemy health." },
            { name: "Rupture", description: "Causes an enemy to take damage when moving, based on distance traveled." }
        ]
    },
    {
        id: 13,
        name: "Bounty Hunter",
        type: "Agility",
        img: "images/Bounty_Hunter_icon.webp",
        details: "Bounty Hunter is a stealthy hero who excels at tracking and ambushing.",
        skills: [
            { name: "Shuriken Toss", description: "Throws a shuriken that bounces to tracked enemies, dealing damage." },
            { name: "Jinada", description: "Grants a critical strike and slows the target with the next attack." },
            { name: "Shadow Walk", description: "Turns invisible, gaining bonus movement speed and damage on the first hit." },
            { name: "Track", description: "Reveals and grants bonus gold on killing the tracked target." }
        ]
    },
    {
        id: 14,
        name: "Brewmaster",
        type: "Strength",
        img: "images/Brewmaster_icon.webp",
        details: "Brewmaster is a durable hero who can split into multiple spirits.",
        skills: [
            { name: "Thunder Clap", description: "Slows and damages nearby enemies." },
            { name: "Cinder Brew", description: "Drenches an area with alcohol, causing enemies to ignite and take damage." },
            { name: "Drunken Brawler", description: "Gives Brewmaster a chance to evade attacks and score a critical hit." },
            { name: "Primal Split", description: "Splits Brewmaster into three powerful elemental warriors." }
        ]
    },
    {
        id: 15,
        name: "Bristleback",
        type: "Strength",
        img: "images/Bristleback_icon.webp",
        details: "Bristleback is a tanky hero who can dish out constant damage over time.",
        skills: [
            { name: "Viscous Nasal Goo", description: "Covers enemies in goo, reducing their armor and slowing them." },
            { name: "Quill Spray", description: "Releases quills, dealing more damage the more it is used in succession." },
            { name: "Bristleback", description: "Reduces damage taken from the back and sides." },
            { name: "Warpath", description: "Passively increases movement speed and damage with each cast." }
        ]
    },
    {
        id: 16,
        name: "Broodmother",
        type: "Agility",
        img: "images/Broodmother_icon.webp",
        details: "Broodmother can spawn spiderlings and is dangerous in secluded areas.",
        skills: [
            { name: "Spawn Spiderlings", description: "Injects venom, dealing damage and creating spiderlings if it kills the target." },
            { name: "Spin Web", description: "Creates a web that grants movement speed, invisibility, and health regen." },
            { name: "Incapacitating Bite", description: "Passively causes attacks to slow and miss." },
            { name: "Insatiable Hunger", description: "Greatly increases Broodmother's lifesteal and attack damage." }
        ]
    },
    {
        id: 17,
        name: "Centaur Warrunner",
        type: "Strength",
        img: "images/Centaur_Warrunner_icon.webp",
        details: "Centaur Warrunner is a tanky initiator with area-of-effect abilities.",
        skills: [
            { name: "Hoof Stomp", description: "Stuns and damages nearby enemies." },
            { name: "Double Edge", description: "Deals damage to both Centaur and his target." },
            { name: "Retaliate", description: "Returns damage to attackers and increases Centaur's attack damage." },
            { name: "Stampede", description: "Allies gain max movement speed and trample enemies, dealing damage." }
        ]
    },
    {
        id: 18,
        name: "Chaos Knight",
        type: "Strength",
        img: "images/Chaos_Knight_icon.webp",
        details: "Chaos Knight is a tanky hero with powerful illusions.",
        skills: [
            { name: "Chaos Bolt", description: "Throws a bolt that stuns and deals random damage to an enemy." },
            { name: "Reality Rift", description: "Teleports Chaos Knight and his illusions to the target, dealing bonus damage." },
            { name: "Chaos Strike", description: "Gives Chaos Knight's attacks a chance to deal bonus critical damage." },
            { name: "Phantasm", description: "Summons several illusions of Chaos Knight to confuse and overwhelm enemies." }
        ]
    },
    {
        id: 19,
        name: "Chen",
        type: "Intelligence",
        img: "images/Chen_icon.webp",
        details: "Chen is a support hero who can control creeps and heal allies.",
        skills: [
            { name: "Penitence", description: "Slows an enemy and increases the damage they take." },
            { name: "Divine Favor", description: "Passively increases the health regen of allies." },
            { name: "Holy Persuasion", description: "Allows Chen to control a non-hero enemy unit." },
            { name: "Hand of God", description: "Heals all allied heroes on the map." }
        ]
    },
    {
        id: 20,
        name: "Clinkz",
        type: "Agility",
        img: "images/Clinkz_icon.webp",
        details: "Clinkz is a ranged damage dealer with stealth abilities.",
        skills: [
            { name: "Strafe", description: "Increases Clinkz's attack speed for a short duration." },
            { name: "Searing Arrows", description: "Adds bonus damage to Clinkz's attacks as a toggle ability." },
            { name: "Skeleton Walk", description: "Turns Clinkz invisible and grants bonus movement speed." },
            { name: "Death Pact", description: "Consumes a creep, gaining health and damage temporarily." }
        ]
    },
   
    
    {
        id: 21,
        name: "Clockwerk",
        type: "Strength",
        img: "images/Clockwerk_icon.webp",
        details: "Clockwerk is a durable initiator who traps enemies and creates chaos on the battlefield.",
        skills: [
            { name: "Battery Assault", description: "Continuously fires random shots around Clockwerk, damaging nearby enemies." },
            { name: "Power Cogs", description: "Surrounds Clockwerk with a circle of electrified cogs, trapping and damaging enemies." },
            { name: "Rocket Flare", description: "Fires a flare to any point on the map, damaging enemies in the area and providing vision." },
            { name: "Hookshot", description: "Launches a grappling hook to an enemy, stunning and pulling Clockwerk to it." }
        ]
    },
    {
        id: 22,
        name: "Dark Willow",
        type: "Intelligence",
        img: "images/Dark_Willow_icon.webp",
        details: "Dark Willow is a spell-casting hero with strong crowd control abilities.",
        skills: [
            { name: "Bramble Maze", description: "Creates a maze of thorny vines that root enemies who walk into them." },
            { name: "Shadow Realm", description: "Dark Willow fades into the shadows, increasing her attack damage." },
            { name: "Cursed Crown", description: "Places a curse on an enemy, stunning them and nearby enemies after a delay." },
            { name: "Bedlam", description: "Summons a fairy that attacks nearby enemies around Dark Willow." }
        ]
    },
    {
        id: 23,
        name: "Dawnbreaker",
        type: "Strength",
        img: "images/Dawnbreaker_icon.webp",
        details: "Dawnbreaker is a powerful melee hero who excels in healing allies and dealing area damage.",
        skills: [
            { name: "Starbreaker", description: "Dawnbreaker swings her hammer three times, dealing damage in an area." },
            { name: "Celestial Hammer", description: "Throws a hammer that damages enemies and pulls Dawnbreaker to its location." },
            { name: "Luminosity", description: "Empowers Dawnbreaker's next attacks to heal her and nearby allies." },
            { name: "Solar Guardian", description: "Channels a solar beam, teleporting to an ally while healing and damaging nearby enemies." }
        ]
    },
    {
        id: 24,
        name: "Dazzle",
        type: "Intelligence",
        img: "images/Dazzle_icon.webp",
        details: "Dazzle is a support hero with strong healing and defensive abilities.",
        skills: [
            { name: "Poison Touch", description: "Casts a spell that damages and slows enemies over time." },
            { name: "Shallow Grave", description: "Prevents an ally from dying, keeping them alive with 1 health point." },
            { name: "Shadow Wave", description: "Heals allies and damages enemies near the target." },
            { name: "Bad Juju", description: "Reduces cooldowns of allies' abilities while increasing armor reduction on enemies." }
        ]
    },
    {
        id: 25,
        name: "Death Prophet",
        type: "Intelligence",
        img: "images/Death_Prophet_icon.webp",
        details: "Death Prophet is a spell-casting hero who drains enemy health and summons spirits to deal damage.",
        skills: [
            { name: "Crypt Swarm", description: "Unleashes a swarm of bats that damage enemies in an area." },
            { name: "Silence", description: "Prevents enemies in a target area from casting spells for a short duration." },
            { name: "Spirit Siphon", description: "Channels the life force of an enemy, dealing damage and healing Death Prophet." },
            { name: "Exorcism", description: "Summons spirits that damage nearby enemies and heal Death Prophet when they return." }
        ]
    },
    {
        id: 26,
        name: "Disruptor",
        type: "Intelligence",
        img: "images/Disruptor_icon.webp",
        details: "Disruptor is a support hero with abilities to manipulate positioning and silence enemies.",
        skills: [
            { name: "Thunder Strike", description: "Deals damage to an enemy over time, providing vision of them." },
            { name: "Glimpse", description: "Teleports a target back to where it was a few seconds ago." },
            { name: "Kinetic Field", description: "Creates a barrier that traps enemies within its bounds." },
            { name: "Static Storm", description: "Creates a damaging field that silences all enemies inside." }
        ]
    },
    {
        id: 27,
        name: "Dragon Knight",
        type: "Strength",
        img: "images/Dragon_Knight_icon.webp",
        details: "Dragon Knight is a durable hero with the ability to transform into a dragon.",
        skills: [
            { name: "Breathe Fire", description: "Unleashes fire in a line, dealing damage to enemies and reducing their attack damage." },
            { name: "Dragon Tail", description: "A melee stun that extends in range during Dragon Form." },
            { name: "Dragon Blood", description: "Increases Dragon Knight's health regeneration and armor." },
            { name: "Elder Dragon Form", description: "Transforms Dragon Knight into a dragon, granting additional abilities and attack range." }
        ]
    },
    {
        id: 28,
        name: "Drow Ranger",
        type: "Agility",
        img: "images/Drow_Ranger_icon.webp",
        details: "Drow Ranger is a ranged hero who deals high physical damage and silences enemies.",
        skills: [
            { name: "Frost Arrows", description: "Slows the movement speed of enemies with each attack." },
            { name: "Gust", description: "Silences enemies in a cone." },
            { name: "Multishot", description: "Fires multiple arrows at once, damaging all enemies in a wide area." },
            { name: "Marksmanship", description: "Grants a chance to deal bonus damage to non-hero units." }
        ]
    },
    {
        id: 29,
        name: "Earth Spirit",
        type: "Strength",
        img: "images/Earth_Spirit_icon.webp",
        details: "Earth Spirit is a melee hero with crowd control abilities and strong initiation potential.",
        skills: [
            { name: "Boulder Smash", description: "Kicks a boulder to deal damage and stun enemies." },
            { name: "Rolling Boulder", description: "Rolls towards a target location, dealing damage and stunning." },
            { name: "Geomagnetic Grip", description: "Pulls an allied stone or hero towards Earth Spirit." },
            { name: "Magnetize", description: "Damages nearby enemies over time and spreads to other enemies near stones." }
        ]
    },
    {
        id: 30,
        name: "Earthshaker",
        type: "Strength",
        img: "images/Earthshaker_icon.webp",
        details: "Earthshaker is a powerful initiator with area control abilities.",
        skills: [
            { name: "Fissure", description: "Creates an impassable ridge, stunning and damaging enemies." },
            { name: "Enchant Totem", description: "Empowers Earthshaker's next attack to deal extra damage." },
            { name: "Aftershock", description: "Causes a mini-stun and deals damage around Earthshaker whenever he casts a spell." },
            { name: "Echo Slam", description: "Deals damage based on the number of enemies nearby." }
        ]
    },
    {
        id: 31,
        name: "Elder Titan",
        type: "Strength",
        img: "images/Elder_Titan_icon.webp",
        details: "Elder Titan is a hero who manipulates terrain and reduces enemy armor.",
        skills: [
            { name: "Echo Stomp", description: "Puts nearby enemies to sleep, stunning them." },
            { name: "Astral Spirit", description: "Summons a spirit to deal damage and return with buffs for Elder Titan." },
            { name: "Natural Order", description: "Reduces armor and magic resistance of enemies near Elder Titan." },
            { name: "Earth Splitter", description: "Cracks the ground, dealing damage and slowing enemies in a line." }
        ]
    },
    {
        id: 32,
        name: "Ember Spirit",
        type: "Agility",
        img: "images/Ember_Spirit_icon.webp",
        details: "Ember Spirit is an agile melee hero with flame-based abilities and mobility.",
        skills: [
            { name: "Searing Chains", description: "Immobilizes enemies while dealing damage over time." },
            { name: "Sleight of Fist", description: "Quickly strikes enemies in an area, dealing bonus damage." },
            { name: "Flame Guard", description: "Grants a shield that absorbs magic damage and deals burn damage." },
            { name: "Fire Remnant", description: "Leaves a remnant that Ember Spirit can dash to for an explosive attack." }
        ]
    },
    {
        id: 33,
        name: "Enchantress",
        type: "Intelligence",
        img: "images/Enchantress_icon.webp",
        details: "Enchantress is a ranged support hero who uses her nature-based abilities to heal allies, charm enemies, and deal massive damage.",
        skills: [
            { name: "Enchant", description: "Charms an enemy or neutral creature, bringing it under Enchantress's control. Can also slow enemy heroes." },
            { name: "Nature's Attendants", description: "Summons a swarm of wisps to heal Enchantress and nearby allies over time." },
            { name: "Impetus", description: "Enables Enchantress's attacks to deal bonus damage based on distance to the target." },
            { name: "Untouchable", description: "Reduces attack speed of enemies who attempt to attack Enchantress." }
        ]
    },
    {
        id: 34,
        name: "Enigma",
        type: "Intelligence",
        img: "images/Enigma_icon.webp",
        details: "Enigma is a powerful initiator with the ability to control groups of enemies with disabling and summoning spells.",
        skills: [
            { name: "Malefice", description: "A damaging spell that stuns an enemy multiple times at intervals." },
            { name: "Demonic Conversion", description: "Splits a target non-hero unit into smaller Eidolons under Enigma's control." },
            { name: "Midnight Pulse", description: "Creates a damaging area that burns enemies based on their max health." },
            { name: "Black Hole", description: "Channels a vortex that pulls in enemies, disabling and damaging them." }
        ]
    },
    {
        id: 35,
        name: "Faceless Void",
        type: "Agility",
        img: "images/Faceless_Void_icon.webp",
        details: "Faceless Void is an elusive melee carry who controls time to manipulate combat outcomes and disable enemies.",
        skills: [
            { name: "Time Walk", description: "Faceless Void rewinds time, negating damage taken in the past few seconds and teleporting to a target location." },
            { name: "Time Dilation", description: "Applies a debuff to enemies, slowing their movement and freezing the cooldown of their abilities." },
            { name: "Time Lock", description: "Gives Faceless Void's attacks a chance to stun and deal bonus damage." },
            { name: "Chronosphere", description: "Creates a bubble that stops time for all units except Faceless Void and his controlled units." }
        ]
    }
];


const heroGrid = document.getElementById('hero-grid');

function displayHeroes(heroesToDisplay) {
    heroGrid.innerHTML = ""; 
    heroesToDisplay.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.classList.add('hero-card');
        heroCard.innerHTML = `
            <img src="${hero.img}" alt="${hero.name}" style="width: 100px; height: 100px;">
            <h3>${hero.name}</h3>
        `;
        heroCard.onclick = () => openHeroModal(hero);
        heroGrid.appendChild(heroCard);
    });
}


displayHeroes(heroes);


function filterHeroes(type) {
    const filteredHeroes = type === "All" ? heroes : heroes.filter(hero => hero.type === type);
    displayHeroes(filteredHeroes);
}


const modal = document.getElementById("heroModal");
const modalHeroName = document.getElementById("modal-hero-name");
const modalHeroDetails = document.getElementById("modal-hero-details");
const modalHeroImage = document.getElementById("modal-hero-image");
const modalHeroSkills = document.getElementById("skill-list");


function openHeroModal(hero) {
    modalHeroName.textContent = hero.name;
    modalHeroDetails.textContent = hero.details;
    modalHeroImage.src = hero.img;
    
    // Clear previous skills
    modalHeroSkills.innerHTML = "";

    // Add hero skills to the modal
    hero.skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.innerHTML = `<strong>${skill.name}</strong>: ${skill.description}`;
        modalHeroSkills.appendChild(skillItem);
    });

    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};
function showAllHeroes() {
    displayHeroes(heroes);
}