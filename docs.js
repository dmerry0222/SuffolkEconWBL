/* ===========================================================================
   DOCUMENTS — this is the only list you maintain.

     title  : what shows in the side rail
     date   : free text — "2026", "July 2026", "July 15, 2026", whatever
              suits the document. Shows on its own line.
     author : person or office. Wraps to two lines, then truncates with
              an ellipsis, so long office names are safe to type in full.
     file  : SharePoint link, or a local path like "docs/name.pdf".
             Leave as "" and the thumbnail opens a "not linked yet" note.
     thumb : local image path like "thumb/name.png".
             Leave as "" and a generic page graphic is drawn instead.
             Landscape images sit as a banner above the text. Portrait
             images (report covers, 8.5x11 screengrabs) are detected
             automatically and fill the whole card, with the text on a
             white scrim across the bottom. Add  portrait:true  to an
             entry to force that treatment on a squarer image.

   SharePoint tip: use Copy link from the document library, then delete
   everything from the "?" onward. Keep the quotes.
   =========================================================================== */
window.DOCS = {
"SU_FY26": {
  title:"Entering Student Survey: Summary Findings",
  date:"September 2026",
  author:"Suffolk OIRA",
  file:"files/oiradeck.pdf",
  thumb:"thumb/FYdata.png"
},

  "SoHE2025": {
  title:"The State of Higher Education, 2025",
  date:"2025",
  author:"Gallup, Lumina Foundation",
  file:"files/GallupLumniaStateofHigherEd2025.pdf",
  thumb:"thumb/State-of-Higher-Education-2025-thumbnail.png"
},
"fafsa": {
  title:"New Lower Earnings Indicator on the FAFSA® form",
  date:"March 2026",
  author:"Federal Student Aid, U.S. DOE",
  file:"https://fsapartners.ed.gov/knowledge-center/library/electronic-announcements/2025-12-03/new-lower-earnings-indicator-fafsar-form",
  thumb:"thumb/fafsa.png"
},
"facattitudes": {
  title:"The Integration of Career Readiness Into the Curriculum",
  date:"April 2024",
  author:"AAC&U, NACE",
  file:"files/careerreadinessfacultyattitutdes.pdf",
  thumb:"thumb/facattitudes.png"
},
"NACE2024studentsurvey": {
  title:"The 2024 Student Survey Report",
  date:"September 2024",
  author:"NACE",
  file:"files/NACE2024studentsurvey.pdf",
  thumb:"thumb/NACE2024studentsurvey.png"
},

"nacecompetency": {
  title:"What Is Career Readiness?",
  date:"Accessed October 2026",
  author:"NACE",
  file:"https://www.naceweb.org/career-readiness/competencies/career-readiness-defined/#competencies",
  thumb:"thumb/nacecompetencies.png"
},


"soares": {
  title:"A systematic review on career interventions...",
  date:"2022",
  author:"Soares, Carvalho, & Daniela Silva",
  file:"files/soares.pdf",
  thumb:"thumb/soares.png"
},

"stradaprinciples": {
  title:"Principles for Quality Education-to-Career Guidance",
  date:"March 2025",
  author:"Strada Education",
  file:"files/stradaprinciples.pdf",
  thumb:"thumb/stradaprinciples.png"
},

"stradabeyond": {
  title:"Internships and beyond: Strengthening career value...",
  date:"July 2025",
  author:"Strada Education",
  file:"files/stradabeyond.pdf",
  thumb:"thumb/stradabeyond.png"
},

"suadmissions1": {
  title:"Suffolk University Undergraduate Admissions",
  date:"October 2026",
  author:"Office of Enrollment Management",
  file:"https://study.suffolk.edu/undergrad",
  thumb:"thumb/suadmissions1.png"
},


"suadmissions2": {
  title:"Choose your path at Suffolk",
  date:"October 2026",
  author:"Office of Enrollment Management",
  file:"https://www.suffolk.edu/undergraduate-admission/why-suffolk/choose-your-path-at-suffolk",
  thumb:"thumb/suadmissions2.png"
},

"cirp": {
  title:"Understanding the Entering Class of 2025",
  date:"2026",
  author:"American Council on Education (ACE) & Higher Education Research Institute (HERI)",
  file:"files/cirp.pdf",
  thumb:"thumb/cirp.png"
},

"talentdisrupted": {
  title:"Talent Disrupted: College graduates, underemployment, and the way forward",
  date:"February 2024",
  author:"Burning Glass Institute & Strada Education",
  file:"files/talentdisrupted.pdf",
  thumb:"thumb/talentdisrupted.png"
},

"wiche": {
  title:"Knocking at the College Door: Projections of High School Graduates",
  date:"December 2024",
  author:"College Board, Lumina Foundation, & WICHE",
  file:"files/wiche.pdf",
  thumb:"thumb/wiche.png"
},

"obbb": {
  title:"2026 STATS/Earnings Accountability",
  date:"September 2026",
  author:"The National Association of Student Financial Aid Administrators (NASFAA)",
  file:"https://www.nasfaa.org/ge_2026",
  thumb:"thumb/obbb.png"
},

"agility": {
  title:"The Agility Imperative: How employers view preparation for an uncertain future",
  date:"2025",
  author:"AAC&U and Morning Consult",
  file:"files/agility.pdf",
  thumb:"thumb/agility.png"
},

"naceinequity": {
  title:"The Class of 2023: Inequity Continues to Underpin Internship Participation and Pay Status",
  date:"August 2023",
  author:"NACE",
  file:"https://www.naceweb.org/talent-acquisition/internships/the-class-of-2023-inequity-continues-to-underpin-internship-participation-and-pay-status/",
  thumb:"thumb/naceinequity.png"
},

"naceobstacles": {
  title:"Students Reveal Obstacles Preventing Them From Taking Internships",
  date:"January 2025",
  author:"NACE",
  file:"https://www.naceweb.org/talent-acquisition/student-attitudes/students-reveal-obstacles-preventing-them-from-taking-internships",
  thumb:"thumb/naceobstacles.png"
},

"stradaexperiences": {
  title:"Understanding Undergraduates’ Career Preparation Experiences",
  date:"December 2021",
  author:"Strada Education",
  file:"https://www.strada.org/reports/understanding-undergraduates-career-preparation-experiences",
  thumb:"thumb/stradaexperiences.png"
},

"gallupalumni": {
  title:"Alumni Perspectives on Higher Education Experiences, Outcomes, and Value",
  date:"2026",
  author:"Gallup & Lumina Foundation",
  file:"files/gallupalumni.pdf",
  thumb:"thumb/gallupalumni.png"
},

"stradaquality": {
  title:"Quality Coaching: Helping Students Navigate the Journey From Education to Career",
  date:"October 2024",
  author:"Strada Education",
  file:"files/stradaquality.pdf",
  thumb:"thumb/stradaquality.png"
},

"foundations": {
  title:"The 4 Foundations of The Career Ecosystem Era",
  date:"November 2024",
  author:"Podany, Career Leadership Collective",
  file:"https://www.careerleadershipcollective.com/post/the-4-foundations-of-the-career-ecosystem-era",
  thumb:"thumb/foundations.png"
},

"nacefaculty": {
  title:"The 4 Foundations of The Career Ecosystem Era",
  date:"November 2024",
  author:"Podany, Career Leadership Collective",
  file:"https://www.careerleadershipcollective.com/post/the-4-foundations-of-the-career-ecosystem-era",
  thumb:"thumb/foundations.png"
},


"nacm": {
  title:"National Alumni Career Mobility Annual Report",
  date:"2024",
  author:"Lightcast",
  file:"files/nacm.pdf",
  thumb:"thumb/nacm.png"
},

/* ===== References for WBLEvidence.html. Entries marked "check" were matched by hand; confirm before going live. =====
   check: stradapowerwbl, rhe2026earnings, stradabuildingbetter and nsci2021 point to PDFs whose file names differ from their labels.
   check: kuh2008hip points to files/kuh2008hips.pdf (the file name has an extra "s").
   nsci2021 and nunley2016audit share one thumbnail (thumb/nunley2016audit.png), the cover of the NSCI report. */

"kuh2008hip": {
  title:"High-Impact Educational Practices: What They Are, Who Has Access to Them, and Why They Matter",
  date:"2008",
  author:"George D. Kuh, AAC&U",
  file:"files/kuh2008hips.pdf",
  thumb:"thumb/kuh2008hip.png"
},
"kuh2013quality": {
  title:"Ensuring Quality and Taking High-Impact Practices to Scale",
  date:"2013",
  author:"George D. Kuh and Ken O'Donnell, AAC&U",
  file:"files/kuh2013quality.pdf",
  thumb:"thumb/kuh2013quality.png"
},
"stradapowerwbl": {
  title:"The Power of Work-Based Learning",
  date:"March 2022",
  author:"Strada Education Foundation",
  file:"files/powerwbl.pdf",
  thumb:"thumb/stradapowerwbl.png"
},
"rhe2026earnings": {
  title:"Work-Based Learning and Early Career Outcomes: Evidence on Earnings, College-Level Employment, and Career Progression",
  date:"2026",
  author:"Torpey-Saboe, Song, and Thompson, Research in Higher Education",
  file:"files/wblevidence.pdf",
  thumb:"thumb/rhe2026earnings.png"
},
"nunley2016audit": {
  title:"Resume audit study of employer callback rates (Nunley et al.), as cited in the NSCI 2021 report",
  date:"2016",
  author:"John M. Nunley et al.",
  file:"files/nunley2016audit.pdf",
  thumb:"thumb/nunley2016audit.png"
},
"stradabuildingbetter": {
  title:"Building Better Internships: Understanding and Improving the Internship Experience",
  date:"May 2024",
  author:"Strada Education Foundation",
  file:"files/stradabuilding.pdf",
  thumb:"thumb/stradabuildingbetter.png"
},
"aacuworkforce2021": {
  title:"How College Contributes to Workforce Success: Employer Views on What Matters Most",
  date:"2021",
  author:"Ashley Finley, AAC&U",
  file:"files/aacuworkforce2021.pdf",
  thumb:"thumb/aacuworkforce2021.png"
},
"gallupppurdue2014": {
  title:"Life in College Matters for Life After College",
  date:"May 2014",
  author:"Gallup and Purdue University",
  file:"files/gallupppurdue2014.pdf",
  thumb:"thumb/gallupppurdue2014.png"
},
"nace2025internship": {
  title:"2025 Internship & Co-op Report",
  date:"2025",
  author:"NACE",
  file:"files/nace2025internship.pdf",
  thumb:"thumb/nace2025internship.png"
},
"nsci2021": {
  title:"National Survey of College Internships (NSCI) 2021 Report",
  date:"2021",
  author:"Center for Research on College-Workforce Transitions, UW-Madison",
  file:"files/nsci.pdf",
  thumb:"thumb/nunley2016audit.png"
},
"ccwtbarriers2024": {
  title:"Navigating Barriers to Access Internships: Challenges for Thwarted Interns Across Institution Types and Student Demographics",
  date:"October 2024",
  author:"Hee Song and Matthew Hora, CCWT",
  file:"files/ccwt1.pdf",
  thumb:"thumb/ccwtbarriers2024.png"
},
"kilgo2015wabash": {
  title:"The Link Between High-Impact Practices and Student Learning: Some Longitudinal Evidence",
  date:"2015",
  author:"Kilgo, Ezell Sheets, and Pascarella, Higher Education",
  file:"https://www.researchgate.net/publication/273705261_The_link_between_high-impact_practices_and_student_learning_Some_longitudinal_evidence",
  thumb:"thumb/kilgo2015wabash.png"
},

  };
