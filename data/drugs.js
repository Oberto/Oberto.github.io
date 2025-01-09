var drugData = {
  /*
      {
        name: "",
        id: "",
        i: [
          "",
          "",
        ],
        c: [""], //contraindications
        cc: [""], // cautions
        a: [
          "",
        ],
        r: [""], //route
        d: [""], //dose
        s: [
          "",
        ], //side effects
        o: [""], //onset
        dd: [""], //duration
        p: [
          "",
        ],
      },
*/

  getAllDrugs: function () {
    return [
      {
        name: "Aspirin",
        id: "aspirin",
        i: ["Myocardial ischaemia"],
        c: ["Known severe allergy", "Third trimester of pregnancy"],
        cc: [
          "Known bleeding disorder",
          "Clinically significant bleeding",
          "Known worsening of bronchospasm with NSAID's",
        ],
        a: [
          "Inhibits the enzyme cyclooxygenase → reduced formation of prostaglandins and thromboxane",
          "Anti-platelet, anti-pyretic, anti-inflammatory and analgesic effects",
          "Pre-hospital = anti-platelet effect",
        ],
        r: ["Per oral (PO)", "Dispersible tablet (chewable)"],
        d: [
    			"300 mg",
    			"No repeats",
    			"Chewed and swallowed 300mg aspirin (including enteric coated tablets) → do not administer additional aspirin",
    			"Swallowed, without chewing, 300mg of enteric coated aspirin → Administer 300mg dispersible aspirin",
          "Uncertainty regarding what the patient has taken → 300mg dispersible aspirin",
    		],
        s: [
          "Increased bleeding",
          "Gastrointestinal bleeding with long-term use",
        ],
        o: ["30-60 minutes"],
        dd: ["3-5 days (anitplatelet activity)"],
        p: [
          "Absorbed in the stomach and small intestine",
          "Metabolised by the liver",
        ],
      },

      {
        name: "Glucagon",
        id: "glucagon",
        i: [
          "Hypoglycaemia when the patient cannot safely swallow glucose/food and IV access cannot be obtained",
        ],
        c: ["Known Severe Allergy"],
        cc: ["None"],
        a: [
          "Stimulates glycogenolysis → increases blood glucose level",
          "Glycogenolysis = breakdown of glycogen into glucose",
        ],
        r: ["Intramuscular (IM)"],
        d: [
          "Adult or child 5 years or over = 1mg",
          "Child less than 5 years = 0.5mg",
        ],
        s: ["None"],
        o: ["5-10 minutes"],
        dd: ["15-60 minutes"],
        p: ["Metabolised by the liver", "Excreted by the kidneys"],
      },

      {
        name: "Glucose gel",
        id: "glucosegel",
        i: [
          "Hypoglycaemia and able to swallow safely",
          "Hypoglycaemia in neonates",
        ],
        c: ["None"], //contraindications
        cc: ["None"], // cautions
        a: ["Provides a rapidly absorbed source of glucose"],
        r: ["Per oral (PO)"], //route
        d: ["10-20g (all ages)", "1 sachet every 10 minutes as required"], //dose
        s: ["None"], //side effects
        o: ["5-10 minutes"], //onset
        dd: ["30-60 minutes"], //duration
        p: [
          "Absorbed in the stomach and small intestine",
          "Metabolised by cells very quickly",
        ],
      },

      {
        name: "Ibuprofen",
        id: "ibuprofen",
        i: [
          "Mild pain (usually in combination with paracetamol)",
          "May be used in moderate to severe pain in combination with other medicine, particularly when the transport time is long",
        ],
        c: [
          "Known severe allergy",
          "Pregnancy",
          "The presence of sepsis, dehydration, shock or clinically significant bleeding",
          "Known worsening of bronchospasm with NSAID’s",
        ], //contraindications
        cc: [
          "The patient has taken ibuprofen within the last four hours",
          "Abdominal pain, particularly if the patient is very unwell or vomiting",
          "Age greater than or equal to 75. Particularly if frail.",
        ], // cautions
        a: [
          "Inhibits the activity of prostaglandin synthesase, which reduces prostaglandin production causing a reduction in inflammation, pain and fever",
        ],
        r: ["Per oral (PO)"], //route
        d: [
          "400mg for an adult weighing 80kg or less",
          "600mg for an adult weighing over 80kg", //dose
          "No repeats",
        ],
        s: [
          "Increased bleeding",
          "Renal impairment",
          "Gastrointestinal ulcers and bleeding (only associated with chronic administration)",
        ], //side effects
        o: ["30-60 minutes"], //onset
        dd: ["4-6 hours"], //duration
        p: [
          "Absorbed in the stomach and small intestine",
          "Metabolised by the liver",
        ],
      },

      {
        name: "Ipratropium",
        id: "ipratropium",
        i: [
          "Bronchospasm secondary to asthma or COPD",
          "Prominante bronchospasm secondary to airway burns, smoke inhalation or chest infection",
        ],
        c: ["Known severe allergy"],
        cc: ["None"],
        a: [
          "It is an anticholinergic agent with antimuscarinic activity",
          "It blocks acetylcholine receptors causing vagal inhibition → bronchodilation",
        ],
        r: ["Nebulised (Neb)"], //route
        d: ["0.5mg for adults and children", "No repeats"], //dose
        s: ["Tachycardia", "Dry mouth", "Blurred vision"], //side effects
        o: ["2-5 minutes"], //onset
        dd: ["6 hours"], //duration
        p: ["Absorbed through the lungs", "Excreted by the kidneys"],
      },

      {
        name: "Salbutamol",
        id: "salbutamol",
        i: [
          "Bronchospasm secondary to asthma or COPD",
          "Prominent bronchospasm secondary to airway burns, smoke inhalation or chest infection",
          "Release syndrome following crush injury",
          "Known or suspected hyperkalaemia with ECG changes",
        ],
        c: ["Known severe allergy"],
        cc: ["None"],
        a: [
          "Bronchodilator",
          "Stimulates Beta 2 receptors → reduction in bronchospasm",
        ],
        r: ["Nebulised (Neb)"],
        d: [
          "5mg for adults and children",
          "Repeat as neccessary",
          "First dose with 0.5mg ipratropium",
        ],
        s: ["Tachycardia", "Tremor"],
        o: ["2-5 minutes"],
        dd: ["1-2 hours"],
        p: ["Absorbed through the lungs", "Excreted by the kidneys"],
      },

      {
        name: "GTN",
        id: "gtn",
        i: [
          "Myocardial ischaemia",
          "Cardiogenic pulmonary oedema",
          "Control of hypertension with autonomic dysreflexia",
          "Control of hypertension prior to fibrinolytic therapy for STEMI",
          "Control of hypertension during inter-hospital transfer for STEMI",
          "STEMI",
        ],
        c: [
          "Known severe allergy",
          "BP < 110 mmHg",
          "HR < 40/min",
          "HR > 150/min",
          "Ventricular tachycardia (VT)",
        ],
        cc: [
          "STEMI (particularly involving the right ventricle)",
          "The patient is frail",
          "Signs of shock",
          "Dysrhythmia",
          "Has taken phosphodiesterase inhibitor in the lasy 24 hours",
          "Known aortic and mitral stenosis",
        ],
        a: [
          "It results in the formation of nitric oxide, which is a vasodilator",
          "Acts on vascular smooth muscle to cause venous and arterial vasodilation",
          "It reduces preload which reduces myocardial oxygen demand",
          "It then reduces afterload which reduces myocardial oxygen demand",
          "Dilates coronary arteries to increase coronary blood supply (not clinically significant)",
        ],
        r: ["Sublingual (SL)"],
        d: [
          "Myocardial ischaemia - 0.4mg every 5 minutes (every 10 minutes if cautioned)",
          "Cardiogenic pulmonary oedema - 0.8mg every 5 minutes (every 10 minutes if cautioned)",
          "Control of hypertension - 0.4mg every 5 minutes",
          "STEMI - 0.4mg every 5 minutes (withhold if signs of poor perfusion are present)",
        ],
        s: [
          "Hypotension",
          "Flushing",
          "Headache",
          "Light-headedness",
          "Tachycardia",
        ],
        o: ["1-2 minutes"],
        dd: ["15-30 minutes"],
        p: [
          "Absorbed by oral mucosa to rapidly reach the vascular system",
          "Metabolised by the liver",
        ],
      },

      {
        name: "Loratadine",
        id: "loratadine",
        i: [
          "Minor allergic reactions confined to skin involvement",
          "Prominent itch associated with anaphylaxis (provided all systemic signs have resolved)",
        ],
        c: ["Known severe allergy", "Age less than 1 year old"], //contraindications
        cc: ["Pregnancy"], // cautions
        a: [
          "It blocks peripheral histamine receptors → blocks the action of histamine and reduces itching and redness",
          "It is a non-sedating anti-histamine",
        ],
        r: ["Per oral (PO)"], //route
        d: [
          "20mg for an adult or child 12 years or over",
          "10mg for a child aged 1-11 years old",
          "No repeats",
        ], //dose
        s: ["None"], //side effects
        o: ["30-60 minutes"], //onset
        dd: ["12-24 hours"], //duration
        p: ["Metabolised by the liver"],
      },

      {
        name: "Methoxyflurane",
        id: "methoxyflurane",
        i: [
          "Moderate to severe pain, when there will be a significant delay in an opiate being administered.",
        ],
        c: [
          "Known severe allergy",
          "Personal or family history of malignant hyperthermia",
          "Known renal impairment",
          "The patient has received methoxyflurane within the last 7 days",
        ], //contraindications
        cc: [
          "Age 75 years or over, particularly if frail",
          "Pre-eclampsia",
          "Administration within a confined space (an ambulance with windows open is not considered confined)",
          "Acute exacerbation of chronic pain",
        ], // cautions
        a: [
          "The mechanism of action is not clear but it is an inhaled analgesic",
        ],
        r: ["Inhaled (INH)"], //route
        d: [
          "Maximum of 6 ml (two doses) for a patient aged greater than or equal to 12 years.",
          "Maximum of 3 ml (one dose) for a child aged less than 12 years.",
        ], //dose
        s: ["Sedation", "Light-headedness"], //side effects
        o: ["1-2 minutes"], //onset
        dd: ["2–5 minutes after stopping the medication"], //duration
        p: ["Metabolised by the liver"],
      },

      {
        name: "Ondansetron",
        id: "ondansetron",
        i: ["Clinically significant nausea and/or vomiting"],
        c: ["Known severe allergy", "Age less than 1 year old"], //contraindications
        cc: ["None"], // cautions
        a: [
          "Blocks serotonin receptors centrally in the brain and peripherally in the gastrointestinal tract → reduction in nausea and vomiting",
        ],
        r: ["Intramuscular (IM)"], //route
        d: [
          "4mg IM for an adult (undiluted)",
          "4mg IM can be repeated once after 20 minutes if required",
        ], //dose
        s: ["Headache", "Flushing"], //side effects
        o: ["5-10 minutes"], //onset
        dd: ["4-8 hours"], //duration
        p: ["Metabolised by the liver"],
      },

      {
        name: "Paracetamol",
        id: "aracetamol",
        i: [
          "Mild or moderate pain (usually in combination with other medicines)",
          "Severe pain in addition to other medicines, particularly if the transport time is long",
        ],
        c: ["Known severe allergy"], //contraindications
        cc: [
          "Paracetamol has been taken within the last four hours",
          "Abdominal pain (particularly if unwell or vomiting)",
          "Known severe liver disease",
        ], // cautions
        a: [
          "Inhibits the production of prostaglandins → reduction in pain and fever",
        ],
        r: ["Per Oral (PO)"], //route
        d: [
          "1g (1000mg) for an adult weighing 80kg or less",
          "1.5g (1500mg) for an adult weighing more than 80kg",
          "No repeats",
        ], //dose
        s: ["None"], //side effects
        o: ["30-60 minutes"], //onset
        dd: ["4-6 hours"], //duration
        p: ["Metabolised by the liver"],
      },

      {
        name: "Prednisone",
        id: "prednisone",
        i: [
          "Bronchospasm associated with asthma or COPD",
          "Croup",
          "Minor allergy associated with rash",
        ],
        c: ["Known severe allergy"], //contraindications
        cc: ["Age less than 5 years with asthma"], // cautions
        a: [
          "Prednisone is a prodrug that is metabolised to prednisolone in the liver",
          "Prednisolone is a corticosteroid with anti-inflammatory mediators → reduction in the inflammatory and immune response",
        ],
        r: ["Per oral (PO)"], //route
        d: ["40mg for an adult", "No repeats"], //dose
        s: ["Fatigue", "Gastrointestinal reflux", "Sodium and water retention"], //side effects
        o: ["30-60 minutes"], //onset
        dd: ["24 hours"], //duration
        p: ["Metabolised by the liver"],
      },

      {
        name: "Adrenaline",
        id: "adrenaline",
        i: [
          "Anaphylaxis",
          "Severe asthma",
          "Moderate to severe stridor",
          "Significant epistaxis",
          "Significant wound bleeding",
          "PLUS out of EMT scope indications",
        ],
        c: ["None"], //contraindications
        cc: ["Myocardial ischaemia", "Tachydysrhythmias"], // cautions
        a: [
          "<span class='no-bullet li-header'>Alpha 1:</span>",
          "Smooth muscle contraction",
          "Vasoconstriction",
          "Stimulation of glycogenolysis and gluconeogenesis",
          "<span class='no-bullet li-header'>Beta 1:</span>",
          "Increase in cardiac contractility",
          "Increase in heart rate",
          "Increase in speed of electrical conduction in heart",
          "<span class='no-bullet li-header'>Beta 2:</span>",
          "Smooth muscle relaxation",
          "Skeletal muscle vasodilation",
          "Bronchodilation",
          "Stabilisation of mast cell membranes to reduce histamine release",
        ],
        r: [
          "Intramuscular (IM)",
          "Intranasal (IN)",
          "Nebulised (Neb)",
          "Topical",
          "<span style='font-style: italic'>Intravenous (IV) (out of scope for EMT’s)</span>",
        ], //route
        d: [
          "<span style='text-decoration: underline'>Anaphylaxis</span> - 0.5mg IM (undiluted)",
          "<span style='text-decoration: underline'>Severe asthma</span> - 0.5mg IM (undiluted)",
          "<span style='text-decoration: underline'>Epistaxis</span> - 0.2mg per bleeding nostril (diluted to 1:10,0000)",
          "<span style='text-decoration: underline'>Uncontrolled bleeding</span> - topical route - dilute to 1:10,000 and ‘flood the wound’",
          "<span style='text-decoration: underline'>Nebulised for stridor</span> - 5mg undiluted",
        ], //dose
        s: [
          "Tachycardia",
          "Hypertension",
          "Nausea",
          "Vomiting",
          "Tremor",
          "Sweating",
          "Hyperglycaemia",
        ], //side effects
        o: [
          "IM - 2-5 minutes",
          "IN, Topical, Nebulised – upon contact with the target site",
        ], //onset
        dd: [
          "5-15 minutes for the cardiovascular effects",
          "Several hours for the mast cell effects",
        ], //duration
        p: ["Metabolised by the liver", "Uptake by sympathetic nerve endings"],
      },

      {
        name: "Prednisolone",
        id: "prednisolone",
        i: [
          "Bronchospasm associated with asthma or COPD",
          "Croup",
          "Minor allergy associated with rash",
        ],
        c: ["Known severe allergy"], //contraindications
        cc: ["Age less than 5 years with asthma"], // cautions
        a: [
          "Prednisolone is a corticosteroid with anti-inflammatory mediators → reduction in the inflammatory and immune response",
        ],
        r: ["Per oral (PO)"], //route
        d: ["Refer to the paediatric dosages", "No repeats"], //dose
        s: ["Fatigue", "Gastrointestinal reflux", "Sodium and water retention"], //side effects
        o: ["30–60 minutes"], //onset
        dd: ["24 hours"], //duration
        p: ["Metabolised by the liver"],
      },
    ];
  },
};
