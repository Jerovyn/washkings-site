type Season = 'spring' | 'summer' | 'fall' | 'winter';

export interface SeasonConfig {
  background: string;
  backgroundWebP?: string;
  audio?: string;
  snow: boolean;
  overlay?: string; // Optional overlay color for different seasons
}

export const seasonConfig: Record<Season, SeasonConfig> = {
  spring: {
    background: '/seasonal/spring/spring_background.png',
    backgroundWebP: '/seasonal/spring/spring_background.webp',
    audio: '/audio/spring-music.mp3',
    snow: false,
    overlay: 'rgba(135, 206, 235, 0.2)', // Light blue spring overlay
  },
  summer: {
    background: '/seasonal/summer/summer_background.png',
    backgroundWebP: '/seasonal/summer/summer_background.webp',
    audio: '/audio/summer-music.mp3',
    snow: false,
    overlay: 'rgba(255, 215, 0, 0.15)', // Golden summer overlay
  },
  fall: {
    background: '/seasonal/fall/fall_background.png',
    backgroundWebP: '/seasonal/fall/fall_background.webp',
    audio: '/audio/fall-music.mp3',
    snow: false,
    overlay: 'rgba(139, 69, 19, 0.25)', // Brown fall overlay
  },
  winter: {
    background: '/seasonal/winter/Holiday_lights_christmas_trees.png',
    backgroundWebP: '/seasonal/winter/Holiday_lights_christmas_trees.webp',
    audio: '/audio/merry-christmas-happy-holiday-music-427692.mp3',
    snow: true,
    overlay: 'rgba(10, 17, 27, 0.4)', // Dark blue winter overlay
  },
} as const;

/**
 * Determines the current season based on the date
 * Spring: March 20 - June 19
 * Summer: June 20 - September 21
 * Fall: September 22 - December 20
 * Winter: December 21 - March 19
 */
export function getCurrentSeason(date: Date = new Date()): Season {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate(); // 1-31

  // Winter: Dec 21 - Mar 19
  if (month === 12 && day >= 21) return 'winter';
  if (month === 1 || month === 2) return 'winter';
  if (month === 3 && day < 20) return 'winter';

  // Spring: Mar 20 - Jun 19
  if (month === 3 && day >= 20) return 'spring';
  if (month === 4 || month === 5) return 'spring';
  if (month === 6 && day < 20) return 'spring';

  // Summer: Jun 20 - Sep 21
  if (month === 6 && day >= 20) return 'summer';
  if (month === 7 || month === 8) return 'summer';
  if (month === 9 && day < 22) return 'summer';

  // Fall: Sep 22 - Dec 20
  return 'fall';
}

export const currentSeason: Season = getCurrentSeason();
export const currentConfig: SeasonConfig = seasonConfig[currentSeason];


