
const avatars = [
  'https://images.unsplash.com/photo-1625581652944-2f297562baa5',
  'https://images.unsplash.com/photo-1690562568374-ad1612f1318e',
  'https://images.unsplash.com/photo-1703325798027-b652e8ea88ee',
  'https://images.unsplash.com/photo-1575383596664-30f4489f9786',
  'https://images.unsplash.com/photo-1680511510151-8c3a6b3e3014',
  'https://images.unsplash.com/photo-1631210863547-bfb472d42a26'
];

export const articlesData = {
  Finance: [
    {
      id: 'f1',
      title: 'Global Markets Rally as Central Banks Signal Rate Cuts',
      excerpt: 'Major indices hit new highs following coordinated statements from leading central banks regarding future monetary policy.',
      content: 'In an unprecedented move that sent ripples across global trading floors, leading central banks have collectively signaled a shift toward more accommodative monetary policies. The coordinated statements, released early Tuesday morning, immediately sparked a massive rally in major indices worldwide, pushing several to all-time highs.\n\nAnalysts note that this shift marks a significant departure from the hawkish stance maintained over the past two years to combat inflation. "What we are seeing is a pivot based on stabilizing core inflation metrics and a desire to foster sustainable economic growth," explained Dr. Aris Thorne, chief economist at a major global investment firm.\n\nInvestors reacted swiftly, pouring capital into equities, particularly in the tech and consumer discretionary sectors. Bond yields also saw a sharp decline, reflecting the market\'s anticipation of lower borrowing costs in the coming quarters. While some skeptics warn of potential asset bubbles, the overarching sentiment remains overwhelmingly bullish as the global economy braces for a new era of liquidity.',
      date: 'February 21, 2026',
      author: 'Sarah Jenkins',
      authorAvatar: avatars[0],
      views: 45200,
      words: 850,
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1640340435016-1964cf4e723b'
    },
    {
      id: 'f2',
      title: 'Investment Banking Revenues Surge in Q1',
      excerpt: 'Top tier banks report better than expected earnings driven by strong M&A activity.',
      content: 'First-quarter earnings reports from Wall Street\'s premier investment banks have shattered expectations, revealing a massive surge in advisory revenues. The primary driver behind this unexpected windfall is a resurgence in Mergers and Acquisitions (M&A) activity, which had been largely dormant due to previously high interest rates and regulatory uncertainties.\n\n"The dam has finally broken," stated Marcus Chen, a senior banking analyst. "Companies that were holding off on strategic acquisitions are now rushing to execute deals before market valuations climb even higher." This flurry of deal-making has resulted in record-breaking advisory fees for the top financial institutions.\n\nLooking ahead, banking executives remain cautiously optimistic. While the current pipeline of deals is robust, they emphasize the need to navigate evolving geopolitical landscapes and potential regulatory headwinds. Nonetheless, the Q1 results have injected a renewed sense of confidence into the financial sector.',
      date: 'February 20, 2026',
      author: 'Michael Chang',
      authorAvatar: avatars[1],
      views: 12500,
      words: 620,
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1579532582937-16c108930bf6'
    },
    {
      id: 'f3',
      title: 'New Wealth Management Strategies for 2026',
      excerpt: 'How high-net-worth individuals are adjusting their portfolios for the current economic climate.',
      content: 'As the global economic landscape continues to evolve, high-net-worth individuals (HNWIs) are significantly recalibrating their wealth management strategies. Moving away from traditional 60/40 portfolio models, today\'s affluent investors are increasingly turning to alternative assets and private markets to seek alpha and hedge against volatility.\n\nPrivate equity, venture capital, and real estate are seeing unprecedented inflows. Furthermore, there is a pronounced shift towards sustainable and ESG-focused investments, driven not just by ethical considerations but by the growing realization that sustainable practices often correlate with long-term financial outperformance.\n\nWealth advisors are also leveraging advanced technologies, including AI-driven portfolio analytics, to provide hyper-personalized investment solutions. "The bespoke nature of wealth management is reaching new heights," notes Elena Rodriguez. "Clients demand transparency, digital accessibility, and strategies that align intimately with their personal values and complex financial goals."',
      date: 'February 19, 2026',
      author: 'Elena Rodriguez',
      authorAvatar: avatars[2],
      views: 8900,
      words: 710,
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1605588722627-818efb8878b9'
    }
  ],
  Markets: [
    {
      id: 'm1',
      title: 'Tech Stocks Lead Morning Trading Session',
      excerpt: 'Semiconductor manufacturers push the NASDAQ higher amid rising demand projections.',
      content: 'Technology stocks surged in early trading today, heavily lifting the NASDAQ composite index. The rally was spearheaded by semiconductor manufacturers, who released revised forward-looking statements projecting massive increases in global demand for next-generation AI chips.\n\nIndustry leaders pointed to the accelerated integration of artificial intelligence across various sectors—from automotive to healthcare—as the primary catalyst. "We are entering a supercycle of silicon demand," declared one tech CEO during a morning earnings call. "The infrastructure required to support the AI revolution is vast, and we are only at the beginning of the build-out phase."\n\nMarket analysts suggest this tech-led momentum could sustain itself through the quarter, although they caution investors to remain vigilant about potential supply chain bottlenecks. For now, however, the bulls are firmly in control of the technology sector, driving significant gains across related ETFs and mutual funds.',
      date: 'February 21, 2026',
      author: 'David Wu',
      authorAvatar: avatars[3],
      views: 31200,
      words: 580,
      category: 'Markets',
      image: 'https://images.unsplash.com/photo-1620266757065-5814239881fd'
    },
    {
      id: 'm2',
      title: 'Commodities Update: Oil Stabilizes After Volatile Week',
      excerpt: 'Energy markets find a floor as OPEC+ reaffirms its production targets.',
      content: 'Following a week of intense price fluctuations, crude oil markets have finally found a stable footing. The stabilization comes on the heels of official communications from OPEC+ leadership, explicitly reaffirming their commitment to current production targets and signaling a readiness to intervene if prices drop below critical thresholds.\n\nTraders had previously panicked over conflicting reports regarding global inventory levels and unexpected dips in industrial demand from key Asian markets. However, the unified stance presented by major oil-producing nations has provided much-needed reassurance to the energy sector.\n\nLooking forward, analysts anticipate a tighter trading range for Brent and WTI crude. Attention is now shifting toward the upcoming summer driving season in the Northern Hemisphere, which traditionally leads to a spike in gasoline consumption and could provide upward pressure on prices.',
      date: 'February 20, 2026',
      author: 'Rachel Thompson',
      authorAvatar: avatars[4],
      views: 15400,
      words: 640,
      category: 'Markets',
      image: 'https://images.unsplash.com/photo-1651496240633-12ab6448a58a'
    }
  ],
  Business: [
    {
      id: 'b1',
      title: 'Major Merger Announced in Retail Sector',
      excerpt: 'Two retail giants combine forces to compete with e-commerce behemoths.',
      content: 'In a blockbuster announcement that stunned the retail industry, two of the nation\'s largest brick-and-mortar retail chains have agreed to a "merger of equals." The strategic consolidation is aimed directly at combating the growing dominance of global e-commerce giants and reshaping the traditional retail landscape.\n\nThe combined entity will boast an unprecedented physical footprint, integrating thousands of storefronts with an aggressively revamped digital supply chain. "This is about survival and evolution," stated the newly appointed joint-CEO. "By pooling our resources, we can leverage our physical locations as micro-fulfillment centers, offering same-day delivery capabilities that pure-play online retailers simply cannot match."\n\nAntitrust regulators have already signaled they will closely scrutinize the deal, though legal experts believe the current competitive environment involving dominant online players may work in the merger\'s favor. If approved, the merger is expected to close by the third quarter of the year.',
      date: 'February 21, 2026',
      author: 'James Wilson',
      authorAvatar: avatars[5],
      views: 48900,
      words: 920,
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1631498539536-54cd61318e4d'
    },
    {
      id: 'b2',
      title: 'Supply Chain Innovations Reduce Costs by 15%',
      excerpt: 'How AI and machine learning are revolutionizing global logistics.',
      content: 'Global logistics companies are reporting significant cost reductions—averaging 15% across the board—thanks to the widespread adoption of artificial intelligence and machine learning technologies. These innovations are transforming how goods are tracked, routed, and delivered across international borders.\n\nPredictive analytics models are now capable of forecasting supply chain disruptions with remarkable accuracy, allowing companies to preemptively reroute shipments and avoid costly delays. Furthermore, automated warehouse operations, driven by advanced robotics, have drastically reduced fulfillment times and minimized human error.\n\n"The supply chain of the past was reactive; the supply chain of the future is entirely predictive," explained Anita Desai, a logistics technology expert. As these technologies become more accessible to mid-sized enterprises, industry observers expect a profound leveling of the playing field in global commerce.',
      date: 'February 20, 2026',
      author: 'Anita Desai',
      authorAvatar: avatars[0],
      views: 22100,
      words: 780,
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1681288918527-03212b22e9ab'
    },
    {
      id: 'b3',
      title: 'The Rise of the Four-Day Work Week',
      excerpt: 'More corporations are adopting flexible schedules to retain top talent.',
      content: 'The four-day work week, once considered a radical experiment, is rapidly becoming a mainstream corporate policy. Driven by intense competition for top-tier talent and shifting employee expectations post-pandemic, major corporations across various industries are adopting compressed schedules with remarkable success.\n\nInitial pilot programs have consistently demonstrated that productivity does not decline when hours are reduced; in many cases, it actually increases. Employees report significantly lower burnout rates, higher job satisfaction, and a much better work-life balance. "We treat our employees like adults," noted the HR director of a Fortune 500 company that recently made the switch permanent. "When you focus on output rather than hours logged, the results speak for themselves."\n\nWhile some traditional industries, particularly those requiring 24/7 customer facing operations, face logistical challenges in implementing this model, the broader trend is unmistakable. The definition of a standard work week is undergoing its most profound transformation in nearly a century.',
      date: 'February 19, 2026',
      author: 'Thomas Wright',
      authorAvatar: avatars[1],
      views: 35600,
      words: 810,
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1557013459-ab0eb3de4cdc'
    }
  ],
  Crypto: [
    {
      id: 'c1',
      title: 'Bitcoin Surpasses Market Expectations',
      excerpt: 'The leading cryptocurrency sees substantial institutional inflows.',
      content: 'Bitcoin has once again defied its critics, surging past key resistance levels to reach new highs. The latest rally is distinctly different from previous retail-driven bubbles; this time, the momentum is heavily fueled by massive inflows from institutional investors, sovereign wealth funds, and major corporate treasuries.\n\nThe approval of several new spot exchange-traded funds (ETFs) in global markets has provided a seamless entry point for traditional capital. Furthermore, macroeconomic uncertainties and currency devaluations in emerging markets have reinforced Bitcoin\'s narrative as a digital store of value and a non-sovereign hedge against inflation.\n\n"We are witnessing the financialization and maturation of the asset class," stated a leading digital asset manager. While volatility remains a characteristic feature of the crypto market, the expanding institutional infrastructure suggests a more robust and resilient foundation for future growth.',
      date: 'February 21, 2026',
      author: 'Alex Nakamoto',
      authorAvatar: avatars[2],
      views: 41200,
      words: 750,
      category: 'Crypto',
      image: 'https://images.unsplash.com/photo-1625029010191-66ba0c5f2cbb'
    },
    {
      id: 'c2',
      title: 'Ethereum Network Upgrade Deployed',
      excerpt: 'Core developers successfully roll out the latest network upgrade.',
      content: 'The Ethereum network successfully underwent its highly anticipated protocol upgrade early this morning, executing flawlessly without any network downtime. The upgrade introduces several critical optimizations designed to significantly reduce transaction fees (gas) and enhance the execution speed of complex smart contracts.\n\nBy implementing advanced data sharding techniques and improved cryptographic rollups, the network can now process a vastly higher throughput of transactions per second. This scalability boost is a massive win for the decentralized application (dApp) ecosystem, particularly for developers building complex DeFi protocols and high-frequency trading platforms.\n\n"This upgrade solidifies Ethereum\'s position as the foundational settlement layer for Web3," remarked Vitalik Hoskinson. The market reacted positively to the seamless deployment, with ETH prices seeing a notable uptick as confidence in the network\'s long-term technical roadmap was reaffirmed.',
      date: 'February 20, 2026',
      author: 'Vitalik Hoskinson',
      authorAvatar: avatars[3],
      views: 28900,
      words: 800,
      category: 'Crypto',
      image: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04'
    },
    {
      id: 'c3',
      title: 'DeFi Protocols Reach Record TVL',
      excerpt: 'Decentralized finance ecosystems experience unprecedented growth.',
      content: 'Total Value Locked (TVL) across decentralized finance (DeFi) protocols has hit an all-time record, crossing the $250 billion mark. The resurgence in DeFi is driven by the introduction of innovative "yield-bearing" stablecoins and cross-chain liquidity bridges that make capital more efficient than ever before.\n\nUnlike traditional banking systems, these open-source protocols allow users to lend, borrow, and earn interest without intermediaries, offering yields that far outpace traditional savings accounts. The current wave of growth is also characterized by a stronger emphasis on security, with major protocols undergoing rigorous, continuous audits and implementing decentralized insurance pools to protect user funds.\n\nRegulators are watching closely, attempting to balance consumer protection with the desire not to stifle innovation. However, the sheer volume of capital flowing into the space indicates that DeFi is rapidly transitioning from a niche experiment to a parallel financial system.',
      date: 'February 19, 2026',
      author: 'Sarah Chen',
      authorAvatar: avatars[4],
      views: 19500,
      words: 680,
      category: 'Crypto',
      image: 'https://images.unsplash.com/photo-1641932269834-af141d2c2017'
    }
  ],
  Technology: [
    {
      id: 't1',
      title: 'New AI Model Outperforms Human Experts in Diagnostics',
      excerpt: 'Medical technology takes a giant leap forward with the latest machine learning breakthrough.',
      content: 'In a landmark study published in a leading medical journal, a newly developed artificial intelligence model has demonstrated diagnostic accuracy surpassing that of top-tier human specialists. The model, trained on millions of diverse medical images and patient histories, excels particularly in the early detection of complex oncological and neurological conditions.\n\nThe system utilizes a novel neural network architecture that not only identifies anomalies but also provides a transparent "reasoning map," explaining to physicians exactly why it reached a specific conclusion. This explainability factor has been a crucial hurdle in clinical AI adoption, and overcoming it marks a turning point in medical technology.\n\n"We are not looking to replace doctors; we are giving them a superhuman second opinion," said Dr. Emily Stone, lead researcher on the project. Hospitals worldwide are now preparing to integrate the system into their radiological workflows, promising faster, more accurate diagnoses and significantly improved patient outcomes.',
      date: 'February 21, 2026',
      author: 'Dr. Emily Stone',
      authorAvatar: avatars[5],
      views: 49500,
      words: 950,
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1671072012624-c2089f89753f'
    },
    {
      id: 't2',
      title: 'Quantum Computing Startups Secure Record Funding',
      excerpt: 'Venture capitalists pour billions into the race for quantum supremacy.',
      content: 'The race to build scalable, fault-tolerant quantum computers has seen a massive influx of capital this quarter. Several leading quantum hardware startups announced successful Series C funding rounds, collectively raising over $3 billion from top-tier venture capital firms and strategic corporate partners.\n\nInvestors are betting heavily on recent breakthroughs in qubit stability and error-correction codes, which have significantly shortened the projected timeline for achieving practical "quantum advantage." These machines promise to revolutionize fields ranging from materials science and drug discovery to complex financial modeling and cryptography.\n\n"The theoretical phase is largely behind us; this is now an engineering and scaling challenge," noted Mark O Connor, a partner at a major tech-focused VC firm. As the hardware matures, there is also a growing ecosystem of software companies developing quantum algorithms, ensuring that once the machines are ready, the applications will be waiting.',
      date: 'February 20, 2026',
      author: 'Mark O Connor',
      authorAvatar: avatars[0],
      views: 18200,
      words: 700,
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1537452881174-ffd33c48c682'
    },
    {
      id: 't3',
      title: 'Cybersecurity Threats on the Rise',
      excerpt: 'A new report details the increasing sophistication of state-sponsored hacking groups.',
      content: 'A comprehensive threat intelligence report released today paints a sobering picture of the global cybersecurity landscape. The data reveals a dramatic increase in the sophistication and frequency of cyberattacks, primarily driven by state-sponsored Advanced Persistent Threat (APT) groups utilizing AI-augmented malware.\n\nThese modern attacks are highly targeted, often bypassing traditional perimeter defenses by exploiting zero-day vulnerabilities and employing advanced social engineering tactics against high-level executives. The primary targets include critical infrastructure, financial institutions, and proprietary research facilities.\n\n"The asymmetry of cyber warfare has never been more apparent," warns Lisa Park, a lead cybersecurity analyst. "Defenders must succeed 100% of the time, while attackers only need to find one minor flaw." In response, organizations are rapidly adopting "Zero Trust" architectures and increasing investments in proactive threat-hunting capabilities to secure their networks.',
      date: 'February 19, 2026',
      author: 'Lisa Park',
      authorAvatar: avatars[1],
      views: 24600,
      words: 820,
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1562600484-c6ef0ffe27a2'
    }
  ],
  RealEstate: [
    {
      id: 'r1',
      title: 'Commercial Real Estate Shows Signs of Recovery',
      excerpt: 'Office space leasing activity picks up in major metropolitan areas.',
      content: 'After a prolonged period of stagnation, the commercial real estate sector is finally exhibiting solid signs of recovery. Major metropolitan areas are reporting a noticeable uptick in office space leasing activity, driven by companies implementing mandatory hybrid work policies and seeking high-quality, amenity-rich "Class A" office environments.\n\nRather than simply reducing footprints, many organizations are redesigning their spaces to foster collaboration and team-building, moving away from dense cubicle layouts to open, flexible environments. "The office is no longer just a place to execute tasks; it\'s a destination for culture and innovation," observed Jonathan Davis, a leading commercial broker.\n\nWhile older, "Class B and C" properties continue to struggle, prompting discussions about residential conversions, the premium segment of the market is surprisingly robust. Investors are cautiously re-entering the space, capitalizing on corrected valuations to secure prime assets in tier-one cities.',
      date: 'February 21, 2026',
      author: 'Jonathan Davis',
      authorAvatar: avatars[2],
      views: 11500,
      words: 690,
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1506851321937-51fff21bc9a0'
    },
    {
      id: 'r2',
      title: 'Housing Market Trends for the Coming Year',
      excerpt: 'Experts predict a stabilization of home prices as inventory increases.',
      content: 'The notoriously volatile residential housing market is showing strong indications of stabilizing over the next twelve months. Following years of hyper-inflated prices and severe inventory shortages, a convergence of new construction completions and adjusted interest rates is bringing much-needed equilibrium to the market.\n\nReal estate economists predict that while prices are unlikely to drop precipitously, the frantic bidding wars that defined previous years are largely over. Inventory levels are slowly creeping up, giving prospective buyers more leverage and time to make considered decisions. "We are returning to a balanced market, which is healthy for both buyers and long-term economic stability," stated housing analyst Amanda Foster.\n\nAdditionally, demographic shifts continue to shape the landscape, with millennials reaching peak home-buying age and a noticeable trend toward secondary, mid-sized cities that offer a lower cost of living without sacrificing quality of life.',
      date: 'February 20, 2026',
      author: 'Amanda Foster',
      authorAvatar: avatars[3],
      views: 33400,
      words: 840,
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1685219789185-15f3fab44379'
    },
    {
      id: 'r3',
      title: 'Sustainable Architecture in Urban Development',
      excerpt: 'Green building practices become the standard for new construction projects.',
      content: 'Sustainable architecture is no longer a niche premium offering; it has become the baseline standard for major urban development projects worldwide. Driven by stringent municipal regulations and a growing demand from eco-conscious corporate tenants, developers are integrating green technologies into every facet of construction.\n\nInnovations such as dynamic "smart glass" that adjusts to sunlight, integrated renewable energy grids, and advanced rainwater harvesting systems are now commonplace. Furthermore, developers are focusing on embodied carbon, opting for sustainable materials like cross-laminated timber over traditional concrete and steel where possible.\n\n"The ROI on sustainable buildings is irrefutable," claims architect Carlos Gomez. "Beyond the environmental imperative, these structures offer drastically lower operational costs and command higher leasing premiums. It is simply good business." As urban centers strive to meet ambitious net-zero targets, the architectural skyline is undergoing a profound, green transformation.',
      date: 'February 19, 2026',
      author: 'Carlos Gomez',
      authorAvatar: avatars[4],
      views: 9800,
      words: 610,
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1563003086-f25c14426ecd'
    }
  ],
  Government: [
    {
      id: 'g1',
      title: 'New Infrastructure Bill Signed into Law',
      excerpt: 'Legislators pass a comprehensive infrastructure package.',
      content: 'In a rare display of bipartisan cooperation, legislators have successfully passed and signed into law a massive, trillion-dollar infrastructure package. The sweeping legislation is designed to modernize the nation\'s aging transportation networks, energy grids, and digital infrastructure over the next decade.\n\nKey provisions include substantial funding for the repair of critical bridges and highways, the expansion of high-speed rail corridors, and a massive investment in upgrading the national power grid to better accommodate renewable energy sources. Additionally, the bill allocates billions to ensure universal broadband access in rural and underserved communities.\n\n"This is a generational investment in our country\'s foundation," remarked political analyst Robert Sterling. "The economic ripple effects—from job creation in construction and manufacturing to enhanced logistical efficiencies—will be felt for decades." Implementation will be closely monitored, with special oversight committees established to ensure funds are deployed transparently and effectively.',
      date: 'February 21, 2026',
      author: 'Robert Sterling',
      authorAvatar: avatars[5],
      views: 27500,
      words: 780,
      category: 'Government',
      image: 'https://images.unsplash.com/photo-1592114714621-ccc6cacad26b'
    },
    {
      id: 'g2',
      title: 'Public Administration Reforms Announced',
      excerpt: 'Federal agencies introduce streamlined digital services.',
      content: 'The federal government has unveiled a comprehensive suite of public administration reforms aimed at drastically reducing bureaucratic red tape and improving citizen accessibility to essential services. The initiative, dubbed "Digital First," mandates that all federal agencies transition their primary service interfaces to secure, unified digital platforms.\n\nCitizens will soon be able to manage everything from tax filings and passport renewals to small business licensing through a single, highly secure portal utilizing biometric authentication. "The goal is to make interacting with the government as seamless and intuitive as ordering a package online," explained policy director Diana Prince.\n\nThe rollout also includes back-end reforms, utilizing AI to automate routine administrative tasks, thereby freeing up public servants to handle more complex, nuanced casework. Early pilot programs have shown a 40% reduction in processing times, signaling a promising shift toward a more agile and responsive public sector.',
      date: 'February 20, 2026',
      author: 'Diana Prince',
      authorAvatar: avatars[0],
      views: 14200,
      words: 650,
      category: 'Government',
      image: 'https://images.unsplash.com/photo-1684911404626-2e53350a063b'
    },
    {
      id: 'g3',
      title: 'Global Summit Focuses on Trade Policy',
      excerpt: 'International leaders convene to discuss evolving trade relations.',
      content: 'World leaders and top economic delegates convened today in Geneva for a high-stakes global summit focused on reshaping international trade policy. Against a backdrop of shifting geopolitical alliances and supply chain vulnerabilities exposed in recent years, the summit aims to establish new frameworks for resilient, fair, and sustainable global commerce.\n\nCentral to the discussions is the concept of "friend-shoring"—the strategic realignment of supply chains toward allied and politically stable nations. Delegates are also tackling complex issues surrounding digital trade tariffs, intellectual property protections in the AI era, and the integration of strict environmental standards into future bilateral agreements.\n\n"The era of frictionless, unquestioned globalization has evolved," noted trade correspondent William Ford. "We are entering a phase where trade policy is inextricably linked with national security and environmental imperatives. The agreements forged here will dictate the flow of global capital for the next quarter-century."\n',
      date: 'February 19, 2026',
      author: 'William Ford',
      authorAvatar: avatars[1],
      views: 21900,
      words: 720,
      category: 'Government',
      image: 'https://images.unsplash.com/photo-1674340657780-461772e25bab'
    }
  ],
  Legal: [
    {
      id: 'l1',
      title: 'Supreme Court Issues Major Ruling on Digital Privacy',
      excerpt: 'Landmark decision addresses data rights in the modern era.',
      content: 'The Supreme Court has delivered a landmark 7-2 ruling that fundamentally reshapes the landscape of digital privacy and consumer data rights. In a highly anticipated decision, the justices ruled that individuals maintain an inherent property right over their personal biometric and locational data, even when utilizing "free" digital services.\n\nThe ruling effectively invalidates the broad, blanket consent clauses traditionally buried within terms of service agreements. Tech companies will now be required to obtain explicit, granular consent before monetizing user data. "This is the most significant privacy ruling of the digital age," stated legal scholar Judge Helen Carter. "It shifts the balance of power from the data aggregators back to the individual citizens."\n\nSilicon Valley legal teams are already scrambling to overhaul their compliance frameworks. While privacy advocates are celebrating the decision as a massive victory, industry groups warn that the stringent new requirements could stifle technological innovation and disrupt established business models built on targeted advertising.',
      date: 'February 21, 2026',
      author: 'Judge Helen Carter',
      authorAvatar: avatars[2],
      views: 38700,
      words: 860,
      category: 'Legal',
      image: 'https://images.unsplash.com/photo-1564921074016-dc83ab4ac783'
    },
    {
      id: 'l2',
      title: 'Corporate Law Updates: Governance Standards',
      excerpt: 'Regulatory bodies introduce new compliance requirements for corporations.',
      content: 'Federal regulatory bodies have officially introduced a sweeping set of new corporate governance standards, marking the most rigorous compliance overhaul since the Sarbanes-Oxley Act. The new regulations demand unprecedented transparency regarding executive compensation structures, corporate political spending, and boardroom diversity metrics.\n\nA key pillar of the updated standards mandates that publicly traded companies disclose detailed audits of their supply chain labor practices and carbon emission footprints. Failure to comply or the filing of misleading disclosures will now trigger severe financial penalties and potential personal liability for board members.\n\n"The standard for fiduciary duty has been irrevocably broadened," explained corporate attorney Stephen Pierce. "Boards are no longer solely responsible to shareholders for financial returns; they are increasingly accountable to a broader set of stakeholders for their societal and environmental impact. Compliance departments will need to scale significantly to meet these new burdens."\n',
      date: 'February 20, 2026',
      author: 'Stephen Pierce',
      authorAvatar: avatars[3],
      views: 16500,
      words: 680,
      category: 'Legal',
      image: 'https://images.unsplash.com/photo-1692162517959-d5958505cc19'
    },
    {
      id: 'l3',
      title: 'International Trade Agreement Signed',
      excerpt: 'Multiple nations finalize historic trade pact.',
      content: 'Following years of grueling negotiations, a coalition of twelve major Pacific and European nations has formally signed a historic multilateral trade pact. The agreement aims to dismantle thousands of tariffs, standardize intellectual property laws, and create a unified digital commerce zone spanning three continents.\n\nLegal experts highlight the pact\'s innovative dispute resolution mechanism, which replaces traditional state-to-state arbitration with a specialized, independent international commercial court. This is expected to significantly expedite the resolution of cross-border trade conflicts and provide a more predictable legal environment for multinational corporations.\n\n"This treaty is a masterclass in modern international law," observed Victoria Vance, an expert in global trade relations. "It manages to protect domestic industries while simultaneously tearing down antiquated barriers to digital and service-based economies. It sets a new benchmark for how future international agreements will be structured."\n',
      date: 'February 19, 2026',
      author: 'Victoria Vance',
      authorAvatar: avatars[4],
      views: 12100,
      words: 710,
      category: 'Legal',
      image: 'https://images.unsplash.com/photo-1475726023136-770d27fb1827'
    }
  ],
  Insurance: [
    {
      id: 'i1',
      title: 'Insurance Industry Adapts to Climate Change',
      excerpt: 'Major providers introduce new policies and risk assessment models.',
      content: 'As extreme weather events increase in frequency and severity, the global insurance industry is undergoing a radical transformation in how it assesses and prices climate risk. Major providers are abandoning historical data models in favor of advanced predictive climate modeling to underwrite property and casualty policies.\n\nConsequently, premiums in high-risk coastal and wildfire-prone areas have skyrocketed, and in some extreme cases, providers are withdrawing coverage entirely. To fill the void, the industry is innovating with "parametric insurance," which pays out predetermined sums immediately upon the occurrence of a specific triggering event (such as a hurricane reaching a certain category), bypassing lengthy claims adjustments.\n\n"The calculus of risk has fundamentally changed," stated Arthur Dent, an insurance industry analyst. "The industry must balance its duty to provide coverage with the existential need to remain solvent in the face of accelerating environmental volatility. The next decade will define the future of disaster recovery financing."\n',
      date: 'February 21, 2026',
      author: 'Arthur Dent',
      authorAvatar: avatars[5],
      views: 29800,
      words: 790,
      category: 'Insurance',
      image: 'https://images.unsplash.com/photo-1631952853636-fb22bccdd2e7'
    },
    {
      id: 'i2',
      title: 'New Cyber Insurance Policies Launched',
      excerpt: 'Leading insurers unveil comprehensive coverage for digital threats.',
      content: 'In response to the escalating epidemic of ransomware and state-sponsored data breaches, leading insurance carriers have completely overhauled their cyber liability portfolios. The new generation of cyber insurance policies offers comprehensive coverage, but it comes with unprecedentedly stringent underwriting requirements.\n\nTo qualify for coverage, corporations must now submit to rigorous, continuous network security audits. Insurers mandate the implementation of multi-factor authentication, endpoint detection systems, and encrypted, immutable offline backups. Policies are increasingly structured to provide not just financial indemnification, but active incident response teams that deploy the moment a breach is detected.\n\n"Cyber insurance has transitioned from a simple financial safety net to a proactive cybersecurity partnership," explained Martha Kent, a specialist in digital risk underwriting. "If a company cannot prove they take their digital hygiene seriously, they simply will not be able to buy coverage at any price."\n',
      date: 'February 20, 2026',
      author: 'Martha Kent',
      authorAvatar: avatars[0],
      views: 22400,
      words: 830,
      category: 'Insurance',
      image: 'https://images.unsplash.com/photo-1602501415685-38483eded181'
    },
    {
      id: 'i3',
      title: 'Health Insurance Coverage Expansion',
      excerpt: 'Government announces initiative to extend coverage.',
      content: 'A sweeping new governmental initiative has been finalized, aimed at dramatically expanding health insurance coverage and reducing out-of-pocket costs for millions of citizens. The legislation heavily subsidizes premiums for middle-class families while enforcing strict new caps on prescription drug prices.\n\nCrucially, the expansion mandates that all comprehensive health plans must now cover a broader range of behavioral health and telemedicine services at parity with physical health treatments. This shift reflects a growing recognition of the importance of mental health and the efficiency of remote care delivery models.\n\n"This represents a paradigm shift in healthcare economics," noted Clark Adams, a healthcare policy expert. "By focusing heavily on preventative care and broad access, the aim is to reduce the long-term systemic costs associated with chronic disease management. While the upfront investment is substantial, the long-term actuarial models suggest a net positive outcome for the healthcare system."\n',
      date: 'February 19, 2026',
      author: 'Clark Adams',
      authorAvatar: avatars[1],
      views: 45100,
      words: 910,
      category: 'Insurance',
      image: 'https://images.unsplash.com/photo-1676631273584-d98bb6e8c1a2'
    }
  ]
};

export const getAllArticles = () => {
  return Object.values(articlesData).flat();
};
