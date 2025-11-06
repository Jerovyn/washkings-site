# Seasonal Background System Guide

## Overview

The website automatically switches backgrounds based on the current date. The system detects the season and loads the appropriate background image, overlay, and effects.

## Season Dates

- **Spring**: March 20 - June 19
- **Summer**: June 20 - September 21
- **Fall**: September 22 - December 20
- **Winter**: December 21 - March 19

## Folder Structure

```
public/seasonal/
├── spring/
│   ├── spring_background.png
│   └── spring_background.webp (optional, preferred)
├── summer/
│   ├── summer_background.png
│   └── summer_background.webp (optional, preferred)
├── fall/
│   ├── fall_background.png
│   └── fall_background.webp (optional, preferred)
└── winter/
    ├── Holiday_lights_christmas_trees.png
    └── Holiday_lights_christmas_trees.webp (optional, preferred)
```

## Adding Background Images

### For Each Season:

1. **Prepare your image:**
   - Recommended size: 1920x1080 or higher
   - Format: PNG or WebP (WebP preferred for better compression)
   - Optimize for web (compress to reduce file size)

2. **Name your files:**
   - Spring: `spring_background.png` and `spring_background.webp`
   - Summer: `summer_background.png` and `summer_background.webp`
   - Fall: `fall_background.png` and `fall_background.webp`
   - Winter: Already configured with `Holiday_lights_christmas_trees.png`

3. **Place files:**
   - Put PNG files in: `public/seasonal/<season>/`
   - Put WebP files in: `public/seasonal/<season>/` (same folder)

4. **The system will:**
   - Automatically detect the current season
   - Try to load WebP first (better compression)
   - Fallback to PNG if WebP is not available
   - Fallback to winter background if image fails to load

## Seasonal Features

### Winter (December 21 - March 19)
- ✅ Snowflakes animation enabled
- Dark blue overlay for contrast
- Christmas/holiday theme

### Spring (March 20 - June 19)
- Light blue overlay
- No snowflakes
- Fresh, blooming theme

### Summer (June 20 - September 21)
- Golden overlay
- No snowflakes
- Bright, sunny theme

### Fall (September 22 - December 20)
- Brown overlay
- No snowflakes
- Autumn colors theme

## Configuration

The seasonal configuration is in `lib/season.ts`. You can customize:
- Background image paths
- Overlay colors
- Audio files (optional)
- Snow effect (winter only)

## Testing

To test different seasons:

1. **Temporarily modify** `lib/season.ts`:
   ```typescript
   export const currentSeason: Season = 'spring'; // Force spring
   ```

2. **Or test with date:**
   ```typescript
   const testDate = new Date('2024-06-15'); // Summer date
   const season = getCurrentSeason(testDate);
   ```

## Current Status

- ✅ Winter: Configured with `Holiday_lights_christmas_trees.png`
- ⚠️ Spring: Needs `spring_background.png` added
- ⚠️ Summer: Needs `summer_background.png` added
- ⚠️ Fall: Needs `fall_background.png` added

## Notes

- The system automatically switches on the exact dates listed above
- If a season's background image is missing, it will fallback to the winter image
- WebP format is preferred for better performance
- All images should be optimized for web (compressed)

