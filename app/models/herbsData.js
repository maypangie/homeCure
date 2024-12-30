const herbsData = {
    "Culinary Herbs": [
        { name: "Basil", benefits: "Aids digestion, has anti-inflammatory properties, and supports cardiovascular health."},
        { name: "Rosemary", benefits: "Enhances memory, improves digestion, and acts as an antioxidant."},
        { name: "Thyme", benefits: "Antimicrobial, helps respiratory conditions, and supports immune health."},
        { name: "Oregano", benefits: "Antiviral, antibacterial, antioxidant-rich, and aids respiratory health."},
        { name: "Parsley", benefits: "Rich in vitamins, supports kidney health, and acts as a diuretic."},
        { name: "Sage", benefits: "Promotes digestion, boosts cognitive function, and has antiseptic properties."},
        { name: "Cilantro/Coriander", benefits: "Detoxifies heavy metals, supports digestion, and has antimicrobial effects."},
        { name: "Tarragon", benefits: "Supports digestion, relieves toothache, and acts as a mild sedative."},
        { name: "Dill", benefits: "Aids digestion, reduces gas, and is rich in antioxidants."},
        { name: "Mint. (Peppermint, Spearmint)", benefits: "Soothes digestion, reduces headaches, and freshens breath."},
        { name: "Chervil", benefits: "Rich in vitamins, supports digestion, and has a mild detoxifying effect."},
        { name: "Bay Leaf", benefits: "Aids digestion, has anti-inflammatory properties, and is an antioxidant."},
        { name: "Cinnamon", benefits: "Aids digestion, regulates blood sugar, has anti-inflammatory properties, and is an antioxidant."},
        { name: "Garlic", benefits: "Boosts immunity, lowers blood pressure, supports heart health, and has antimicrobial and detoxifying properties."},
        { name: "Ginger", benefits: "Reduces nausea, improves digestion, soothes inflammation, and enhances circulation with antioxidant properties."},
        { name: "Tumeric", benefits: "Reduces inflammation, supports joint and liver health, and boosts brain function with antioxidant properties."},




    ],

    "Medicinal Herbs": [
        { name: "Chamomile", benefits: "Calms anxiety, promotes sleep, soothes digestive disorders, and reduces inflammation." },
        { name: "Lavender", benefits: "Eases anxiety, promotes sleep, reduces pain, and soothes skin irritations." },
        { name: "Peppermint", benefits: "Eases digestive issues, reduces headaches, and soothes nausea." },
        { name: "Ginger", benefits: "Anti-inflammatory, helps with nausea, improves digestion, and boosts circulation." },
        { name: "Turmeric", benefits: "Anti-inflammatory, antioxidant, supports joint health, and aids in detoxification." },
        { name: "Echinacea", benefits: "Boosts immune function, helps fight infections, and reduces cold symptoms." },
        { name: "Lemon Balm", benefits: "Calms anxiety, improves sleep, and aids in digestion." },
        { name: "Ashwagandha", benefits: "Adaptogen, reduces stress, boosts energy, and strengthens the immune system." },
        { name: "Yarrow", benefits: "Stops bleeding, reduces fever, and aids digestion." },
        { name: "Elderflower", benefits: "Reduces cold symptoms, promotes sweating, and soothes respiratory infections." },
        { name: "Mugwort", benefits: "Eases digestion, supports menstrual health, and is used in dream work." },
        { name: "Goldenseal", benefits: "Antimicrobial, boosts the immune system, and treats infections." },
        { name: "Red Clover", benefits: "Purifies the blood, supports skin health, and balances hormones." },
        { name: "Licorice Root", benefits: "Soothes the digestive tract, eases respiratory issues, and reduces inflammation." },
        { name: "Comfrey", benefits: "Promotes wound healing, reduces inflammation, and supports bone health." },
        { name: "St. John’s Wort", benefits: "Reduces depression, eases nerve pain, and promotes skin healing." },
        { name: "Motherwort", benefits: "Calms anxiety, supports heart health, and eases menstrual cramps." },
        { name: "Wild Yam", benefits: "Eases menstrual cramps, supports hormone balance, and soothes inflammation." },
        { name: "Blue Vervain", benefits: "Eases stress, supports digestion, and soothes sore muscles." },

    ],

    "Herbs for Skin and Hair": [

        { name: "Aloe Vera", benefits: "Soothes burns, hydrates skin, promotes wound healing, and reduces inflammation." },
        { name: "Calendula", benefits: "Soothes skin irritations, promotes wound healing, and has antifungal properties." },
        { name: "Neem", benefits: "Antibacterial, treats acne, reduces dandruff, and promotes scalp health." },
        { name: "Horsetail", benefits: "Promotes hair strength, supports nail health, and aids in wound healing." },
        { name: "Burdock Root", benefits: "Purifies the blood, detoxifies the skin, and reduces acne." },
        { name: "Plantain", benefits: "Soothes insect bites, promotes wound healing, and reduces inflammation." },
        { name: "Gotu Kola", benefits: "Promotes skin healing, improves circulation, and reduces stretch marks." },
        { name: "Nettle", benefits: "Strengthens hair, promotes hair growth, and reduces dandruff." },


    ],

    "Adaptogenic Herbs (Stress Relief)": [

        { name: "Holy Basil (Tulsi)", benefits: "Reduces stress, balances hormones, and boosts the immune system." },
        { name: "Rhodiola", benefits: "Enhances endurance, reduces fatigue, and improves mental clarity." },
        { name: "Maca", benefits: "Boosts energy, balances hormones, and increases stamina." },
        { name: "Ginseng (Panax)", benefits: "Boosts energy, improves mental function, and strengthens immunity." },
        { name: "Eleuthero (Siberian Ginseng)", benefits: "Reduces stress, enhances stamina, and supports the immune system." },
        { name: "Schisandra", benefits: "Enhances endurance, reduces stress, and supports liver health." },
        { name: "Ashwagandha", benefits: "Reduces anxiety, balances hormones, and strengthens the immune system." },


    ],

    "Detoxifying Herbs": [

        { name: "Dandelion", benefits: "Supports liver function, aids digestion, and is a natural diuretic." },
        { name: "Milk Thistle", benefits: "Protects the liver, promotes detoxification, and supports healthy skin." },
        { name: "Burdock Root", benefits: "Detoxifies the liver, purifies the blood, and improves skin health." },
        { name: "Yellow", benefits: "Dock Purifies the blood, promotes healthy digestion, and supports liver health." },
        { name: "Red Clover", benefits: "Cleanses the blood, supports lymphatic health, and balances hormones." },
        { name: "Nettle", benefits: "Rich in nutrients, supports detoxification, and improves kidney function." },
        { name: "Sarsaparilla", benefits: "Supports liver detox, purifies the blood, and reduces inflammation." },
        { name: "Holy Basil (Tulsi)", benefits: "Supports detoxification, Cleanses blood, boosts immunity, reduces stress, improves respiratory health, and is rich in antioxidants."},

    ],


    "Herbs for Immune Support": [


        { name: "Elderberry", benefits: "Antiviral, boosts immune function, and reduces cold and flu symptoms." },
        { name: "Garlic", benefits: "Antimicrobial, boosts the immune system, and supports cardiovascular health." },
        { name: "Astragalus", benefits: "Strengthens immunity, protects against infections, and promotes longevity." },
        { name: "Oregano Oil", benefits: "Antiviral, antibacterial, and boosts the immune system." },
        { name: "Reishi Mushroom", benefits: "Supports immune function, reduces inflammation, and promotes longevity." },
        { name: "Shiitake Mushroom", benefits: "Enhances immune response, supports heart health, and is rich in antioxidants." },
        { name: "Cat’s Claw", benefits: "Boosts immune function, fights infections, and reduces inflammation." },


    ],

    "Herbs for Women’s Health": [



        { name: "Red Raspberry Leaf", benefits: "Tones the uterus, supports reproductive health, and eases menstrual cramps." },
        { name: "Vitex (Chasteberry)", benefits: "Balances hormones, supports PMS, and regulates menstruation." },
        { name: "Dong Quai", benefits: "Tones the uterus, balances hormones, and supports menstrual health." },
        { name: "Black Cohosh", benefits: "Eases menopause symptoms, balances hormones, and soothes menstrual pain." },
        { name: "Evening Primrose", benefits: "Eases PMS, promotes healthy skin, and supports hormone balance." },
        { name: "Shatavari", benefits: "Balances hormones, supports fertility, and promotes reproductive health." },
        { name: "Motherwort", benefits: "Calms the nerves, supports heart health, and regulates menstrual cycles." },


    ],



    "Herbs for Digestive Health": [

        { name: "Fennel", benefits: "Reduces gas, eases bloating, and promotes digestion." },
        { name: "Slippery Elm", benefits: "Soothes the digestive tract, reduces acid reflux, and supports ulcer healing." },
        { name: "Licorice Root", benefits: "Eases digestive inflammation, supports respiratory health, and soothes ulcers" },
        { name: "Marshmallow Root", benefits: "Soothes the digestive tract, reduces inflammation, and aids in digestion." },
        { name: "Peppermint", benefits: "Relieves bloating, soothes nausea, and supports digestive function." },
        { name: "Ginger", benefits: "Improves digestion, reduces nausea, and promotes circulation." },
        { name: "Gentian", benefits: "Stimulates appetite, supports digestion, and promotes liver health." },
        { name: "Anise", benefits: "Relieves gas, promotes digestion, and soothes the respiratory system." },
        { name: "Caraway", benefits: "Reduces gas, supports digestion, and eases bloating." },



    ],



    "Herbs for Respiratory Health": [

        { name: "Mullein", benefits: "Soothes respiratory irritation, acts as an expectorant, and supports lung health."},
        { name: "Eucalyptus", benefits: "Decongestant, antimicrobial, and soothes respiratory issues."},
        { name: "Elecampane", benefits: "Expectorant soothes the lungs, and helps with coughs."},
        { name: "Licorice Root", benefits: "Soothes the throat, supports lung health, and reduces inflammation."},
        { name: "Thyme", benefits: "Antimicrobial, supports lung health, and acts as an expectorant."},
        { name: "Coltsfoot", benefits: "Soothes the lungs, acts as an expectorant, and reduces cough."},
        { name: "Hyssop", benefits: "Antimicrobial, promotes respiratory health, and reduces mucus."},


    ],


    "Herbs for Anxiety and Relaxation": [

        { name: "Valerian Root", benefits: "Calms the nervous system, promotes sleep, and reduces anxiety."},
        { name: "Passionflower", benefits: "Relieves anxiety, promotes relaxation, and helps with insomnia."},
        { name: "Skullcap", benefits: "Calms the nervous system, reduces stress, and promotes sleep."},
        { name: "Kava", benefits: "Reduces anxiety, relaxes muscles, and promotes restful sleep."},
        { name: "Hops", benefits: "Promotes relaxation, reduces anxiety, and helps with sleep."},
        { name: "Lemon Balm", benefits: "Calms the mind, reduces anxiety, and improves mood."},
        { name: "Blue Vervain", benefits: "Relaxes the nervous system, reduces anxiety, and promotes emotional balance."},


    ],


    "Herbs for Cardiovascular Health": [

        { name: "Hawthorn", benefits: "Strengthens the heart, improves circulation, and lowers blood pressure."},
        { name: "Cayenne Pepper", benefits: "Improves circulation, supports heart health, and boosts metabolism."},
        { name: "Garlic", benefits: "Supports cardiovascular health, lowers cholesterol, and improves circulation."},
        { name: "Motherwort", benefits: "Supports heart health, reduces palpitations, and calms anxiety."},
        { name: "Yarrow", benefits: "Supports circulation, reduces inflammation, and tones the blood vessels"},


    ],














    // Add more categories here
};

module.exports = herbsData;

// module.exports = herbsData;




