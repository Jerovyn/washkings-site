export const seasonConfig = {
  winter: {
    background: '/seasonal/winter/Holiday_lights_christmas_trees.png',
    backgroundWebP: '/seasonal/winter/Holiday_lights_christmas_trees.webp',
    audio: '/audio/merry-christmas-happy-holiday-music-427692.mp3',
    snow: false, // Disabled for this release
  },
} as const;

export const currentSeason = 'winter' as const;
export const currentConfig = seasonConfig[currentSeason];

