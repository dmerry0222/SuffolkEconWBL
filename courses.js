/* Source of truth for course content. Edit here and every place that reads window.COURSES updates.
   The object is plain JSON (double-quoted keys, no trailing commas) so it can move to a .json file unchanged.
   Text fields accept **bold** markup.
   Each course may list units (number, name, weeks, description, optional week_breakdown, and assignments with
   assignment_name / assignment_description); the Two 1-Credit Courses page shows them under Sample Course Content.
   "cost" is the projected new spending per fiscal year (blank hides it in the popup; where "costFrom" names a CE planner result (cost100, cost200) the popup shows the planner's default figure and "cost" is only the fallback until the planner loads; a figure not starting with $, like WBL's "Cost Calculator", links to the WBL planner instead of the CE planner); "costOffset" is current instruction the course replaces (CAS-201 and its analogues for CE-200), subtracted from the planner's figure to give new spending.
   "instruction" is who teaches the course; "responsibilities" (WBL) is the Expectations list; its first entry is the non-expectation, shown first with a ! marker (text after a 
 in it is the softer italic aside).
   A course may also list criteria (name, description), shown in its popup, and a description_heading to rename its Description header. */
window.COURSES = {
  "CE-100": {
    "name": "Career Exploration",
    "credits": "1 credit",
    "credits_explained": "1 credit, new to both SBS and CAS",
    "timing": "First year, 2nd semester",
    "cost": "$87,500",
    "costFrom": "cost100",
    "instruction": "Career Staff (5); faculty & staff; local alumni(?)",
    "tagline": "Research and evaluate academic and career pathways at Suffolk, and develop a concrete plan for continued exploration and growth.",
    "description": "Through guided self-assessment, exploration of Suffolk's academic opportunities, and evidence-based career research, students investigate how their interests and experiences might shape their academic and professional directions. Students may explore broadly across disciplines or examine possibilities more deeply within an established field of interest. They engage with faculty and professionals, evaluate labor-market information, and develop foundational skills for communicating their emerging qualifications. Attention is also given to how financial and personal circumstances influence educational and career decisions. Students synthesize their learning into a **Career Exploration Plan** that identifies promising directions, outstanding questions, and actionable next steps. The course establishes a foundation for more focused professional preparation in CE-200.",
    "learningOutcomes": [
      "Analyze how their interests, strengths, and experiences inform their developing academic and career directions.",
      "Research and compare academic and professional pathways, exploring possibilities across disciplines or more deeply within an established field of interest.",
      "Critically evaluate labor-market information and professional perspectives to draw evidence-based conclusions about career opportunities.",
      "Initiate academic and professional relationships through appropriate outreach and purposeful engagement with faculty, alumni, or other professionals.",
      "Develop a foundational resume and professional introduction that effectively communicate their experiences and emerging qualifications.",
      "Synthesize their exploration and research into an actionable Career Exploration Plan that identifies promising directions and next steps."
    ],
    "units": [
      {
        "number": 1,
        "name": "Exploring Your Potential",
        "weeks": "1-2",
        "description": "Students will engage in guided self-assessment and reflection to identify their interests, recognize skills and strengths demonstrated through past experiences, and establish a starting point for academic and career exploration.",
        "assignments": []
      },
      {
        "number": 2,
        "name": "Articulating Your Strengths",
        "weeks": "3-4",
        "description": "Students will learn to communicate their experiences and emerging qualifications through their existing resume from Semester 1, LinkedIn presence, and a personal introduction / pitch statement. They will begin cataloging interview stories for their Career Plan.",
        "assignments": []
      },
      {
        "number": 3,
        "name": "Exploring Academic Possibilities",
        "weeks": "5-6",
        "description": "Students conduct an investigation of Suffolk's academic programs and disciplinary opportunities; either a focused exploration of their chosen major or a broader survey of disciplines. They then connect their interests and potential career directions to coursework, faculty expertise, and experiences available within the University. They will speak with students and faculty in multiple academic units about their own experiences, and combine that research about those fields to produce a",
        "assignments": []
      },
      {
        "number": 4,
        "name": "Evaluating Career Paths",
        "weeks": "7-9",
        "description": "Students will research and compare professional pathways using labor-market evidence and firsthand sources, while investigating the organizations and professional communities that support career development.",
        "week_breakdown": [
          {
            "weeknum": 7,
            "week_name": "Investigating Professional Roles",
            "week_description": "Students will examine what professionals actually do in different fields, investigating their responsibilities and working conditions while challenging assumptions about familiar career paths."
          },
          {
            "weeknum": 8,
            "week_name": "Evaluating Labor-Market Evidence",
            "week_description": "Students will learn to interpret job postings and labor-market information, assessing qualifications, compensation, and career prospects to make informed comparisons among potential directions."
          },
          {
            "weeknum": 9,
            "week_name": "Exploring Professional Communities",
            "week_description": "Students will investigate professional associations and communities of practice, learning how people in their fields develop expertise, establish connections, and access opportunities for continued growth."
          }
        ],
        "assignments": []
      },
      {
        "number": 5,
        "name": "Building Professional Relationships",
        "weeks": "10-11",
        "description": "Students will learn strategies for initiating conversations, building authentic professional relationships, and cultivating networks grounded in genuine curiosity and mutual trust. They will apply these skills through purposeful outreach, an informational interview, and a professional exploration event, reflecting on what they learn and how to sustain meaningful connections.",
        "assignments": []
      },
      {
        "number": 6,
        "name": "Reflecting Back, Planning Ahead",
        "weeks": "12",
        "description": "Students will synthesize their research and experiences into a <b>Career Exploration Plan</b>, identifying promising directions, remaining questions, and concrete next steps for continued development.",
        "assignments": []
      }
    ]
  },
  "CE-200": {
    "name": "Career Navigation",
    "credits": "1 credit",
    "credits_explained": "1 credit, new in SBS, replacing CAS-201 and its analogues",
    "prereq": "CE-100",
    "cost": "$30,000",
    "costFrom": "cost200",
    "costOffset": 35000,
    "instruction": "Career Staff (10); department faculty, especially those who also teach the internship course, if desired",
    "timing": "Preferred Sophomore fall or spring, with Junior year available; explore possibility of online summer sections",
    "tagline": "Evaluate and pursue professional opportunities, strengthen application skills, and create a concrete plan to secure and succeed in a work-based learning experience.",
    "description": "Building on CE-100, this course prepares students to **pursue, secure, and succeed in** an internship or other qualifying work-based learning experience. Students assess their professional readiness and investigate specific opportunities, identifying gaps between their current qualifications and employer expectations. They strengthen their application and interviewing skills, develop targeted professional materials, and put networking strategies into practice. Students also examine workplace expectations and strategies for learning effectively from professional experiences. The course culminates in an individualized **Career Navigation Plan** that builds on earlier exploration, prioritizes realistic work-based learning opportunities, and establishes concrete steps toward securing and making the most of an experience.",
    "learningOutcomes": [
      "Assess their professional readiness, identify barriers to pursuing opportunities, and take targeted actions to address them.",
      "Evaluate specific work-based learning opportunities and assess their qualifications against relevant professional expectations.",
      "Implement a professional networking strategy through purposeful outreach, engagement, and follow-up.",
      "Develop targeted application materials and demonstrate effective interviewing skills, using feedback to improve their performance.",
      "Demonstrate effective professional communication, accountability, and initiative in response to realistic workplace situations.",
      "Develop an actionable Career Navigation Plan that identifies prioritized opportunities, a realistic work-based learning timeline, and next steps."
    ],
    "units": [
      {
        "number": 1,
        "name": "Assessing Your Readiness",
        "weeks": "1",
        "description": "Students will revisit their Career Exploration Plan from CE-100 to reflect on how their interests and goals have evolved. They will assess their readiness to pursue work-based learning and establish specific development goals to work toward throughout the semester.",
        "assignments": []
      },
      {
        "number": 2,
        "name": "Identifying Opportunities",
        "weeks": "2-3",
        "description": "Students will investigate specific internships and other qualifying work-based learning opportunities, learning to interpret position requirements and assess their own qualifications. They will identify realistic targets and develop strategies for addressing gaps between their current experience and professional expectations.",
        "assignments": []
      },
      {
        "number": 3,
        "name": "Engaging Your Professional Network",
        "weeks": "4-5",
        "description": "Building on the relationship-building skills and connections developed in CE-100, students will learn to engage their professional networks as they pursue work-based learning opportunities. They will practice seeking advice, requesting introductions, and identifying people who can offer guidance or support throughout the search. Students will apply these strategies through purposeful outreach and follow-up.",
        "assignments": []
      },
      {
        "number": 4,
        "name": "Applying and Interviewing",
        "weeks": "6-8",
        "description": "Students will develop targeted professional materials and practice navigating the application and selection process. Using real opportunities as examples, they will tailor their applications, demonstrate their qualifications in simulated interviews, and incorporate feedback to strengthen their performance.",
        "week_breakdown": [
          {
            "weeknum": 6,
            "week_name": "Presenting Your Qualifications",
            "week_description": "Students will tailor their resumes and professional profiles to specific opportunities, learning to communicate relevant experiences and demonstrate their qualifications through compelling, evidence-based examples."
          },
          {
            "weeknum": 7,
            "week_name": "Navigating the Application Process",
            "week_description": "Students will examine application requirements and recruiting practices, develop effective application responses, and practice managing deadlines and follow-up. They will also learn to recognize common screening practices and avoid preventable application mistakes."
          },
          {
            "weeknum": 8,
            "week_name": "Interviewing with Confidence",
            "week_description": "Students will prepare for and participate in mock interviews, practicing how to communicate their qualifications through specific examples, respond thoughtfully to questions, and use feedback to improve their performance."
          }
        ],
        "assignments": []
      },
      {
        "number": 5,
        "name": "Thriving in Professional Environments",
        "weeks": "9-11",
        "description": "Students will learn to navigate workplace expectations and contribute effectively in professional settings. Through realistic scenarios and guided practice, they will develop strategies for communicating with supervisors, exercising sound judgment, and responding constructively to workplace challenges. They will also learn to approach work-based learning as an opportunity for intentional growth, seeking meaningful responsibilities and documenting their development.",
        "week_breakdown": [
          {
            "weeknum": 9,
            "week_name": "Communicating & Following Through",
            "week_description": "Students will practice professional communication, clarifying expectations, managing commitments, and addressing problems or missed deadlines responsibly."
          },
          {
            "weeknum": 10,
            "week_name": "Navigating Workplace Situations",
            "week_description": "Students will examine realistic workplace challenges and practice responding to feedback, demonstrating initiative, and exercising professional judgment in interactions with supervisors and colleagues."
          },
          {
            "weeknum": 11,
            "week_name": "Making the Most of Your Experience",
            "week_description": "Students will develop strategies for setting learning goals, seeking substantive responsibilities, building professional relationships, and documenting accomplishments throughout their work-based learning experience."
          }
        ],
        "assignments": []
      },
      {
        "number": 6,
        "name": "Reflecting Back, Planning Ahead",
        "weeks": "12",
        "description": "Students will reflect on their progress throughout CE-200 and integrate their opportunity research and professional preparation into a realistic strategy for securing and succeeding in work-based learning. They will establish a timeline for pursuing opportunities, identify alternative pathways, and set initial goals for their professional experience.",
        "assignments": []
      }
    ]
  },
  "WBL": {
    "name": "Work-Based Learning",
    "credits": "0-4 credits",
    "credits_explained": "0-4 credits, at Departments' discretion",
    "prereq": "CE-200",
    "cost": "Cost Calculator",
    "instruction": "Work-based learning courses are taught by department faculty within their own colleges. Faculty are compensated for teaching a full course, which recognizes the academic oversight, advising, and assessment the role involves.",
    "responsibilities": [
      "Faculty teaching an internship or other WBL-serving course **are not responsible** for finding students' placements.\nFaculty currently in these roles often choose to be involved in the search/placement stage, and will continue to be welcome allies in that process.",
      "Review job descriptions and other placement information to ensure the five WBL criteria, and any superceding department/major requirements, are met.",
      "Approve those site placements in a centralized system that informs the Registrar and informs a Suffolk Employment database.",
      "Meet two times with each student in their course (on site, on campus, or on Zoom) once during the first 3 weeks of the term and once after the middle of the term.",
      "Hold weekly office hours, with Zoom accessibility.",
      "Support students as they complete the end-of-experience requirements (updated professional materials, completed reflection and Career Plan v3.0 submission, other department/major requirements).",
      "Assess and grade those assignments."
    ],
    "timing": "Typically summer after sophomore year through summer after junior year; flexible from sophomore spring through senior year.",
    "tagline": "Substantive, supervised work, such as an internship, faculty-led research, qualifying on-campus employment, or an approved project with a current employer.",
    "description_heading": "Description",
    "description": "While it is sometimes useful shorthand to refer to this as \"the internship requirement,\" it is important to clarify that work-based learning encompasses a broader range of experiences that provide students with opportunities to apply their knowledge and skills in real-world settings. To create a consistent definition of work-based learning that distinguishes it from other (very valuable!) forms of experiential education, the SGE committee posited five criteria, which have been reviewed and revised based on faculty feedback.",
    "criteria_heading": "5 Qualifying Criteria of Work-Based Learning Experiences",
    "criteria": [
      {
        "name": "Real Work",
        "description": "A majority of the student's responsibilities consist of substantive, career-relevant work that draws upon or extends academic learning and advances career exploration or preparation."
      },
      {
        "name": "Meaningful Time",
        "description": "The student completes at least **120 hours**, including required training and activities integral to the role. With prior approval, two experiences may be combined to reach 120 hours, provided each independently satisfies all other criteria."
      },
      {
        "name": "Professional Supervision",
        "description": "A qualified professional or field-specific equivalent provides appropriate training, ongoing guidance and feedback, and an end-of-experience performance evaluation."
      },
      {
        "name": "Expanded Network",
        "description": "The student engages with at least **two professionals beyond existing classroom, peer, and immediate supervisory relationships**, gaining exposure to perspectives, pathways, communities, or opportunities relevant to their goals."
      },
      {
        "name": "Integrated Learning",
        "description": "The student identifies what they learned, connects it to academic and career development, and communicates the experience's value in a professional context."
      }
    ]
  }
};

/* Learning outcome pairings between the two courses, as zero-based positions in each learningOutcomes list.
   Each entry is [CE-100 positions, CE-200 positions]; the Two 1-Credit Courses page lines them up row by row. */
window.LO_PAIRINGS = [
  [[0],[0]],
  [[1,2],[1]],
  [[3],[2]],
  [[4],[3]],
  [[],[4]],
  [[5],[5]]
];
