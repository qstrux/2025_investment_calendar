export interface EventInsight {
  eventId: string;
  background: string;
  marketImpact: string;
  historicalContext: string;
  keyTakeaways: string[];
}

export const eventInsights: Record<string, EventInsight> = {
  // FOMC Meetings
  'fomc-1': {
    eventId: 'fomc-1',
    background: 'The Federal Open Market Committee (FOMC) meets eight times per year to determine the appropriate stance of monetary policy. This January meeting marks the first policy decision of 2025.',
    marketImpact: 'FOMC decisions directly impact interest rates, bond yields, and equity valuations. Rate changes typically cause immediate volatility across all asset classes, particularly in rate-sensitive sectors like financials, real estate, and utilities.',
    historicalContext: 'Historically, January FOMC meetings have set the tone for the year\'s monetary policy. In recent cycles, the Fed has used early-year meetings to signal policy pivots, making this meeting particularly important for 2025 positioning.',
    keyTakeaways: [
      'Watch for forward guidance on the policy path',
      'Monitor dot plot projections (if released)',
      'Pay attention to inflation commentary',
      'Assess labor market assessment changes'
    ]
  },
  'fomc-2': {
    eventId: 'fomc-2',
    background: 'This March FOMC meeting includes updated economic projections and the Summary of Economic Projections (SEP), commonly known as the "dot plot," which shows individual members\' rate forecasts.',
    marketImpact: 'The dot plot release typically causes significant market volatility as investors recalibrate expectations for the year\'s rate path. Equity markets often experience sharp moves based on the projected terminal rate.',
    historicalContext: 'March meetings with SEP releases have historically been among the most market-moving Fed events. The 2022 March meeting signaled the beginning of the aggressive tightening cycle.',
    keyTakeaways: [
      'Dot plot provides critical rate path insights',
      'GDP and inflation forecasts guide expectations',
      'Press conference Q&A often reveals policy nuances',
      'Compare projections to market pricing'
    ]
  },

  // CPI Data
  'cpi-1': {
    eventId: 'cpi-1',
    background: 'The Consumer Price Index (CPI) measures the average change in prices paid by urban consumers for a basket of goods and services. It\'s the most widely watched inflation indicator.',
    marketImpact: 'CPI releases are among the highest-impact economic data points. Higher-than-expected readings typically pressure equities and boost bond yields, while lower readings have the opposite effect. The Fed closely monitors CPI when setting policy.',
    historicalContext: 'CPI peaked at 9.1% in June 2022, prompting aggressive Fed tightening. By late 2024, inflation had moderated significantly, but the Fed remains vigilant about persistent price pressures in services and housing.',
    keyTakeaways: [
      'Core CPI (ex-food and energy) is the Fed\'s preferred measure',
      'Shelter costs represent ~30% of CPI and lag market rents',
      'Services inflation has proven stickier than goods',
      'Month-over-month changes matter more than year-over-year'
    ]
  },

  // Treasury Quarterly Refunding
  'treasury-q1': {
    eventId: 'treasury-q1',
    background: 'The Treasury Borrowing Advisory Committee (TBAC) meets quarterly to advise the Treasury on debt management strategy. These meetings coincide with quarterly refunding announcements, which detail the government\'s borrowing plans and auction sizes for the coming quarter.',
    marketImpact: 'Quarterly refunding announcements directly impact Treasury yields and liquidity conditions. Larger-than-expected auction sizes can pressure bond prices and raise yields, while smaller sizes may support the market. Changes in debt issuance mix (bills vs. notes vs. bonds) affect the yield curve shape.',
    historicalContext: 'TBAC meetings gained prominence during the 2020 pandemic when Treasury dramatically increased borrowing. Recent meetings have focused on managing elevated debt levels while maintaining market stability. The committee includes representatives from major financial institutions.',
    keyTakeaways: [
      'Auction size changes signal fiscal policy trajectory',
      'Debt maturity composition affects yield curve',
      'TBAC recommendations often preview policy shifts',
      'Market liquidity concerns are key discussion topics'
    ]
  },
  'treasury-q2': {
    eventId: 'treasury-q2',
    background: 'The Q2 refunding typically occurs in early May, providing updated borrowing estimates for the April-June quarter. This meeting often incorporates revised fiscal projections following the April tax collection period.',
    marketImpact: 'May refunding announcements can significantly impact summer trading dynamics. Tax receipt data incorporated into estimates provides clarity on deficit financing needs, affecting Treasury supply expectations and rate market positioning.',
    historicalContext: 'Q2 refundings have historically been less volatile than Q1 or Q4 meetings, but can still move markets if deficit projections change materially. The 2023 Q2 meeting occurred amid debt ceiling negotiations, causing elevated volatility.',
    keyTakeaways: [
      'Tax receipt data improves borrowing estimate accuracy',
      'Summer auction schedule is finalized',
      'Deficit trajectory becomes clearer post-tax season',
      'Monitor for debt ceiling commentary'
    ]
  },
  'treasury-q3': {
    eventId: 'treasury-q3',
    background: 'The August quarterly refunding sets borrowing plans for the July-September quarter. This meeting often occurs during a period of lower market liquidity, making Treasury supply announcements particularly impactful.',
    marketImpact: 'August refunding announcements can cause outsized market moves due to summer liquidity constraints. Changes in auction sizes or debt composition may face less market absorption capacity, potentially amplifying yield movements.',
    historicalContext: 'Summer refundings have historically been used to implement gradual policy adjustments. The 2024 Q3 meeting maintained stable auction sizes despite elevated deficits, prioritizing market stability over rapid debt reduction.',
    keyTakeaways: [
      'Liquidity conditions amplify market reactions',
      'Fall auction calendar is established',
      'Mid-year fiscal adjustments may be announced',
      'Watch for debt ceiling timeline updates'
    ]
  },
  'treasury-q4': {
    eventId: 'treasury-q4',
    background: 'The November quarterly refunding is the final TBAC meeting of the calendar year, setting borrowing plans for October-December and often providing preliminary guidance for the following year. This meeting occurs shortly after the fiscal year-end (September 30).',
    marketImpact: 'Q4 refunding announcements are closely watched for year-ahead borrowing guidance. Market participants use these estimates to position for the following year\'s supply dynamics. Changes in long-term debt issuance strategy are often previewed here.',
    historicalContext: 'November meetings have historically been used to signal major policy changes. The 2023 Q4 meeting announced plans to slow the pace of Treasury bill issuance growth, causing a significant rally in longer-dated Treasuries.',
    keyTakeaways: [
      'Year-ahead borrowing estimates guide positioning',
      'Fiscal year-end data provides clarity on deficit',
      'Debt ceiling timeline becomes critical',
      'Policy changes often previewed for next year'
    ]
  },

  // Debt Ceiling and Government Funding Risks
  'risk-9': {
    eventId: 'risk-9',
    background: 'The debt ceiling is a statutory limit on the total amount of debt the federal government can issue. When the Treasury approaches this limit (the "X-date"), it must employ extraordinary measures to continue funding operations. June historically represents a high-risk period due to the timing of tax receipts and spending patterns.',
    marketImpact: 'Debt ceiling standoffs create significant market uncertainty. As the X-date approaches, Treasury bill yields can spike, equity volatility increases, and safe-haven demand rises. A breach would be unprecedented and could trigger a financial crisis.',
    historicalContext: 'The 2011 debt ceiling crisis resulted in the first-ever U.S. credit rating downgrade by S&P. The 2013 standoff caused Treasury bill yields to spike to 0.35% from near-zero levels. Most recently, the 2023 crisis was resolved just days before the estimated X-date.',
    keyTakeaways: [
      'Monitor Treasury cash balance weekly',
      'Short-dated T-bills may become impaired',
      'Political negotiations drive timeline uncertainty',
      'Extraordinary measures buy time but are finite'
    ]
  },
  'risk-10': {
    eventId: 'risk-10',
    background: 'The federal fiscal year ends on September 30. If Congress fails to pass appropriations bills or a continuing resolution by this date, the government faces a shutdown. Non-essential federal operations cease, affecting economic data releases and government services.',
    marketImpact: 'Government shutdowns typically cause modest market volatility, with greater impact on specific sectors (defense contractors, government services). Extended shutdowns can affect GDP growth and delay critical economic data releases, increasing uncertainty.',
    historicalContext: 'The longest government shutdown in U.S. history lasted 35 days (December 2018 - January 2019). The 2013 shutdown lasted 16 days and reduced Q4 GDP growth by an estimated 0.3%. Shutdowns have become more frequent in recent decades amid increased political polarization.',
    keyTakeaways: [
      'Continuing resolutions are common temporary fixes',
      'Economic data releases may be delayed',
      'Defense and government service stocks face pressure',
      'Longer shutdowns have greater economic impact'
    ]
  },
  'risk-11': {
    eventId: 'risk-11',
    background: 'Year-end government funding deadlines often coincide with holiday congressional recesses, creating compressed negotiation timelines. December deadlines are particularly challenging as lawmakers face pressure to avoid shutdown during the holiday season while addressing multiple policy priorities.',
    marketImpact: 'December funding deadlines can cause year-end market volatility, particularly if combined with other risk factors. However, the political pressure to avoid holiday shutdowns often leads to last-minute resolutions, creating whipsaw price action.',
    historicalContext: 'December funding crises have been resolved at the last minute in recent years, often through omnibus spending bills or short-term continuing resolutions. The 2020 December deadline was extended to include COVID relief, causing significant market uncertainty before resolution.',
    keyTakeaways: [
      'Holiday timing increases resolution pressure',
      'Omnibus bills often include unrelated provisions',
      'Year-end tax policy changes may be included',
      'Market liquidity is typically low, amplifying moves'
    ]
  },

  // NFP Data
  'nfp-1': {
    eventId: 'nfp-1',
    background: 'The Nonfarm Payrolls report shows the change in the number of employed people during the previous month, excluding farm workers. It\'s released on the first Friday of each month.',
    marketImpact: 'NFP is one of the most market-moving economic releases. Strong job growth can pressure equities if it suggests persistent inflation, while weak data may signal economic slowdown. The unemployment rate and wage growth components are equally important.',
    historicalContext: 'The labor market remained remarkably resilient through 2023-2024 despite aggressive rate hikes. Average monthly job gains of 200K+ continued, defying recession predictions. The Fed watches for signs of labor market cooling.',
    keyTakeaways: [
      'Average hourly earnings indicate wage pressure',
      'Labor force participation affects unemployment rate interpretation',
      'Revisions to prior months can be significant',
      'Strong jobs data may delay Fed rate cuts'
    ]
  },

  // Apple Earnings
  'aapl-q1': {
    eventId: 'aapl-q1',
    background: 'Apple\'s Q1 (fiscal year) includes the critical holiday shopping season, typically representing the company\'s strongest quarter. iPhone sales, Services revenue, and Greater China performance are key focus areas.',
    marketImpact: 'As the world\'s largest company by market cap, Apple\'s earnings significantly impact the S&P 500 and Nasdaq. The stock often moves 3-5% post-earnings, with ripple effects across the tech sector and supply chain partners.',
    historicalContext: 'Apple has consistently beaten earnings expectations, with Services becoming an increasingly important growth driver. The company\'s $3 trillion+ market cap makes it a bellwether for big tech and the broader market.',
    keyTakeaways: [
      'iPhone revenue typically accounts for 50%+ of total sales',
      'Services gross margins exceed 70% vs. ~35% for products',
      'Greater China revenue is a key growth indicator',
      'Guidance for next quarter sets tone for stock performance'
    ]
  },

  // Microsoft Earnings
  'msft-q2': {
    eventId: 'msft-q2',
    background: 'Microsoft\'s fiscal Q2 covers the October-December period. Azure cloud growth, AI monetization, and Office 365 subscriber trends are primary investor focuses.',
    marketImpact: 'Microsoft is a top-3 S&P 500 component and AI leader. Azure growth rates directly impact the stock, with every percentage point of acceleration/deceleration moving shares significantly. AI commentary is increasingly critical.',
    historicalContext: 'Microsoft has transformed from a software company to a cloud and AI powerhouse. Azure has grown 25%+ annually, and the company\'s OpenAI partnership positions it at the forefront of generative AI commercialization.',
    keyTakeaways: [
      'Azure growth rate is the single most important metric',
      'AI contribution to Azure revenue is closely watched',
      'Commercial cloud gross margin trends indicate profitability',
      'LinkedIn and gaming provide diversification'
    ]
  },

  // Tesla Earnings
  'tsla-q4': {
    eventId: 'tsla-q4',
    background: 'Tesla\'s Q4 2024 earnings will reveal full-year delivery numbers, margin trends, and 2025 guidance. Energy storage and Full Self-Driving (FSD) progress are increasingly important.',
    marketImpact: 'Tesla is among the most volatile large-cap stocks, often moving 10%+ on earnings. Delivery numbers, automotive gross margins, and Elon Musk\'s commentary drive sentiment. The stock trades on growth expectations rather than current fundamentals.',
    historicalContext: 'Tesla pioneered mass-market EVs but faces intensifying competition, particularly from Chinese manufacturers. Price cuts in 2023-2024 pressured margins while supporting volume. The Cybertruck launch and energy business growth are new focus areas.',
    keyTakeaways: [
      'Automotive gross margin (ex-credits) shows pricing power',
      'Annual delivery growth target is typically 50%',
      'Energy storage is becoming a significant revenue contributor',
      'FSD adoption and autonomy timeline are long-term drivers'
    ]
  },

  // NVIDIA Earnings
  'nvda-q4': {
    eventId: 'nvda-q4',
    background: 'NVIDIA\'s fiscal Q4 FY25 earnings will showcase data center GPU demand driven by AI infrastructure buildout. The company dominates AI chip market with 80%+ share.',
    marketImpact: 'NVIDIA has become one of the market\'s most influential stocks, with earnings often moving the entire tech sector. Data center revenue growth and guidance are critical, as they signal AI spending trends across the economy.',
    historicalContext: 'NVIDIA\'s revenue exploded from $27B (FY23) to over $60B (FY24) on AI demand. The company\'s H100 and H200 GPUs are essential for training large language models. Supply constraints have eased, but demand remains robust.',
    keyTakeaways: [
      'Data center revenue now exceeds 75% of total sales',
      'Gross margins above 70% reflect pricing power',
      'Next-generation chip roadmap (Blackwell) is critical',
      'Customer concentration (hyperscalers) presents risk'
    ]
  },

  // Risk Alerts
  'risk-1': {
    eventId: 'risk-1',
    background: 'Earnings season represents a period of heightened volatility as companies report quarterly results. Q4 earnings season typically peaks in mid-to-late January.',
    marketImpact: 'Individual stock volatility spikes during earnings, with average moves of 4-6% for S&P 500 companies. Sector rotation often occurs as investors reassess growth outlooks. Options premiums increase significantly.',
    historicalContext: 'Historically, earnings seasons have produced some of the year\'s largest single-day moves. The January 2024 earnings season saw major tech stocks move 10%+ on results, significantly impacting index performance.',
    keyTakeaways: [
      'Avoid concentrated positions ahead of earnings',
      'Consider protective options strategies',
      'Watch for sector-wide guidance trends',
      'Post-earnings drift can continue for days'
    ]
  },

  'cpi-2': {
    eventId: 'cpi-2',
    background: 'February CPI data reflects January price changes and provides the first comprehensive inflation reading of the new year. Seasonal adjustments are particularly important in January data.',
    marketImpact: 'Early-year CPI readings set expectations for the Fed\'s policy path. A surprise in either direction can cause significant repricing of rate cut expectations and impact all asset classes.',
    historicalContext: 'January has historically shown volatile month-over-month CPI readings due to seasonal factors, including post-holiday price adjustments and annual price resets in categories like healthcare and insurance.',
    keyTakeaways: [
      'Watch for seasonal adjustment anomalies',
      'Healthcare and insurance see annual resets in January',
      'Used car prices often show January volatility',
      'Compare to Fed\'s 2% target on annualized basis'
    ]
  },

  'ppi-1': {
    eventId: 'ppi-1',
    background: 'The Producer Price Index (PPI) measures the average change in selling prices received by domestic producers. It\'s a leading indicator of consumer inflation as producer costs eventually pass through to consumers.',
    marketImpact: 'PPI has become increasingly important as the Fed monitors inflation pipelines. Rising PPI often precedes CPI increases, making it a key forward-looking indicator. Energy and commodity components are particularly volatile.',
    historicalContext: 'PPI surged earlier and more dramatically than CPI during the 2021-2022 inflation spike, reaching 11.7% in March 2022. The measure has since normalized but remains above pre-pandemic trends in services.',
    keyTakeaways: [
      'Final demand PPI is the headline number',
      'Core PPI excludes food and energy volatility',
      'Services PPI has been stickier than goods',
      'Leading indicator for future CPI movements'
    ]
  },

  'aapl-q2': {
    eventId: 'aapl-q2',
    background: 'Apple\'s fiscal Q2 (calendar Q1) typically shows sequential revenue decline from the holiday quarter. Services growth and new product launches (often in spring) are key focuses.',
    marketImpact: 'Q2 guidance is critical as it sets expectations for the traditionally slower spring quarter. iPhone upgrade cycles, Services momentum, and commentary on new products drive the stock.',
    historicalContext: 'Apple has consistently grown Services revenue 15-20% annually, providing stability against cyclical iPhone sales. The company\'s ecosystem strategy has created high customer retention and recurring revenue.',
    keyTakeaways: [
      'Sequential decline from Q1 is normal and expected',
      'Services attach rate to installed base is key metric',
      'Wearables and accessories provide growth diversification',
      'Spring product launches can boost Q3 expectations'
    ]
  },

  'msft-q3': {
    eventId: 'msft-q3',
    background: 'Microsoft\'s fiscal Q3 (January-March) typically shows strong enterprise spending as companies deploy budgets before fiscal year-ends. Azure and AI momentum are primary focuses.',
    marketImpact: 'Q3 is often Microsoft\'s strongest quarter for commercial bookings. Azure growth acceleration/deceleration moves the stock significantly, with AI-driven demand becoming the dominant narrative.',
    historicalContext: 'Microsoft\'s commercial cloud run rate exceeded $130B annually by late 2024. The company\'s early AI investments through OpenAI partnership have positioned it as the enterprise AI leader.',
    keyTakeaways: [
      'Commercial bookings indicate future revenue',
      'Azure AI services are fastest-growing segment',
      'Microsoft 365 Copilot adoption is closely watched',
      'Operating margin expansion shows scale benefits'
    ]
  },

  'tsla-q1': {
    eventId: 'tsla-q1',
    background: 'Tesla\'s Q1 typically shows seasonal weakness in deliveries due to reduced production days and model year transitions. Margin trends and full-year delivery guidance are critical.',
    marketImpact: 'Tesla\'s stock is highly sensitive to delivery numbers and margin trends. The company\'s valuation assumes continued rapid growth, making guidance particularly important. Elon Musk\'s commentary often moves the stock more than the numbers.',
    historicalContext: 'Tesla delivered over 1.8M vehicles in 2023 but faced margin pressure from price cuts to maintain volume. Competition from Chinese EV makers and traditional automakers has intensified.',
    keyTakeaways: [
      'Q1 deliveries often weakest quarter seasonally',
      'Automotive gross margin trend shows pricing environment',
      'Energy storage revenue becoming material',
      'Full-year delivery guidance sets tone for stock'
    ]
  },

  'nvda-q1': {
    eventId: 'nvda-q1',
    background: 'NVIDIA\'s fiscal Q1 FY26 earnings will showcase continued AI infrastructure demand. The transition from H100 to H200 and upcoming Blackwell architecture are key focus areas.',
    marketImpact: 'NVIDIA has become a bellwether for AI spending across the economy. Data center revenue growth and guidance drive not just NVIDIA but the entire semiconductor and tech sectors.',
    historicalContext: 'NVIDIA\'s data center revenue grew from $15B (FY23) to over $47B (FY24), driven by ChatGPT launch and subsequent AI infrastructure buildout. The company\'s CUDA software moat remains intact.',
    keyTakeaways: [
      'Data center segment is 80%+ of revenue',
      'Blackwell architecture represents next growth wave',
      'Customer diversification beyond hyperscalers is key',
      'Gross margins above 70% show pricing power'
    ]
  },

  'risk-2': {
    eventId: 'risk-2',
    background: 'Quarter-end rebalancing occurs as institutional investors adjust portfolios to maintain target allocations. March 31 marks fiscal year-end for many companies and mutual funds.',
    marketImpact: 'Rebalancing can create significant intraday volatility, particularly in the final hour of trading. Stocks that have outperformed may see selling pressure, while laggards may see buying. Index funds execute large trades to match benchmark weights.',
    historicalContext: 'Quarter-end effects have become more pronounced with the growth of passive investing. The last trading day of quarters often sees 2-3x normal volume in the final 30 minutes.',
    keyTakeaways: [
      'Final hour volatility typically highest',
      'Outperformers may see profit-taking',
      'Index rebalancing creates predictable flows',
      'Window dressing by fund managers affects prices'
    ]
  },

  'risk-3': {
    eventId: 'risk-3',
    background: 'Tax Day (April 15) marks the deadline for individual tax returns and can trigger capital flows as investors realize gains/losses and make IRA contributions.',
    marketImpact: 'Tax-related selling can create temporary price pressure, particularly in stocks with large embedded gains. Conversely, IRA contributions (deadline is tax day) can provide buying support. Volatility often increases in the weeks leading up to the deadline.',
    historicalContext: 'April has historically been a strong month for equities (part of "sell in May" phenomenon), but the days immediately around Tax Day can see unusual trading patterns as investors adjust portfolios.',
    keyTakeaways: [
      'Tax-loss harvesting opportunities may emerge',
      'IRA contribution deadline can boost mutual funds',
      'Capital gains distributions affect fund flows',
      'Extensions push some activity to October'
    ]
  },

  'risk-4': {
    eventId: 'risk-4',
    background: 'Mid-year (June 30) represents a major rebalancing point as institutional investors reset portfolios for the second half. It\'s also fiscal year-end for many companies and governments.',
    marketImpact: 'June 30 rebalancing is typically larger than quarter-end adjustments due to semi-annual portfolio reviews and fiscal year-end considerations. The "summer doldrums" often begin after this date as trading volumes decline.',
    historicalContext: 'The "sell in May and go away" adage relates partly to mid-year rebalancing. Historically, summer months (July-September) have shown weaker returns than other periods.',
    keyTakeaways: [
      'Largest rebalancing flows of the year',
      'Fiscal year-end for many institutions',
      'Precedes summer liquidity decline',
      'Dividend reinvestment creates additional flows'
    ]
  },

  'risk-6': {
    eventId: 'risk-6',
    background: 'September has historically been the weakest month for stock market performance. Multiple factors contribute, including summer vacation ending and fiscal year-end for many institutions.',
    marketImpact: 'The "September Effect" is well-documented, with the S&P 500 averaging negative returns in September over the past century. Volatility (VIX) typically rises, and trading volumes increase as investors return from summer.',
    historicalContext: 'Since 1950, September has been the only month with consistently negative average returns for the S&P 500. Major market corrections have often begun or accelerated in September (1929, 2001, 2008).',
    keyTakeaways: [
      'Historically weakest month for equities',
      'Volatility tends to increase',
      'Mutual fund tax-loss harvesting begins',
      'Defensive positioning may be warranted'
    ]
  },

  'risk-7': {
    eventId: 'risk-7',
    background: 'Q3 earnings season in October is particularly important as it provides the final results before year-end planning. Companies often provide preliminary guidance for the following year.',
    marketImpact: 'October earnings can set the tone for year-end positioning. Disappointing results often lead to tax-loss selling, while strong results can fuel a year-end rally. Guidance for Q4 (including holiday season) is critical.',
    historicalContext: 'October has seen some of the market\'s most dramatic moves, including the 1987 crash and 2008 financial crisis lows. However, it\'s also produced strong recoveries and marked major market bottoms.',
    keyTakeaways: [
      'Q4 guidance includes critical holiday season',
      'Companies may pre-announce to manage expectations',
      'Tax-loss selling can amplify negative reactions',
      'Historical volatility warrants caution'
    ]
  },

  'risk-8': {
    eventId: 'risk-8',
    background: 'The final two weeks of December see reduced liquidity as institutional traders take vacation and trading desks operate with skeleton crews. Year-end tax planning and window dressing create unusual flows.',
    marketImpact: 'Low liquidity can amplify price moves in both directions. The "Santa Claus Rally" (last 5 trading days of December plus first 2 of January) has historically produced positive returns 78% of the time, but thin markets increase risk.',
    historicalContext: 'December is typically positive for stocks, but the holiday period can see sharp intraday moves on low volume. Tax-loss selling usually completes by mid-month, followed by year-end buying.',
    keyTakeaways: [
      'Liquidity drops significantly after December 15',
      'Tax-loss selling deadline is December 31',
      'Window dressing creates artificial demand',
      'Santa Claus Rally is statistically significant'
    ]
  }
};

// Helper function to get insight for an event
export function getEventInsight(eventId: string): EventInsight | null {
  return eventInsights[eventId] || null;
}

// Check if event has detailed insight
export function hasInsight(eventId: string): boolean {
  return eventId in eventInsights;
}
