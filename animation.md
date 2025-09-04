# Animation Implementation Reference

## AboutUs Section Animations

### Overview
Complex scroll-triggered animation system for the AboutUs section featuring concentric circles with breathing animation and dynamic card emergence.

### Animation Sequence
1. **Circles Scale In** (Progress 0.1-0.4)
2. **Breathing Animation** (Progress 0.4+)
3. **Cards Emerge** (Progress 0.7-0.9)

### Technical Implementation

#### Circle Animations
```javascript
// Staggered circle scaling
const circle1Scale = useTransform(aboutScrollProgress, [0.1, 0.25], [0, 1]);
const circle2Scale = useTransform(aboutScrollProgress, [0.15, 0.3], [0, 1]);
const circle3Scale = useTransform(aboutScrollProgress, [0.2, 0.35], [0, 1]);
const circle4Scale = useTransform(aboutScrollProgress, [0.25, 0.4], [0, 1]);

// Breathing animation (after circles fully grown)
const breathingScale = useMotionValue(1);
useEffect(() => {
  if (circlesFullyGrown) {
    const controls = animate(breathingScale, [1, 1.05, 1], {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    });
    return () => controls.stop();
  }
}, [circlesFullyGrown, breathingScale]);

// Combined scale (scroll + breathing)
const circle1CombinedScale = useTransform(
  [circle1Scale, breathingScale],
  (values: number[]) => values[0] * values[1]
);
```

#### Card Emergence Animation
```javascript
// Card visibility and scaling
const cardOpacity = useTransform(aboutScrollProgress, [0.7, 0.85], [0, 1]);
const cardScale = useTransform(aboutScrollProgress, [0.7, 0.85], [0, 1]);

// Card positioning with perfect alignment
// Top cards: Y = -80px, Bottom cards: Y = 100px
// Left cards: X = -286px, Right cards: X = 286px
const card1X = useTransform(aboutScrollProgress, [0.7, 0.9], [0, -286]);
const card1Y = useTransform(aboutScrollProgress, [0.7, 0.9], [0, -80]);
const card1Rotate = useTransform(aboutScrollProgress, [0.7, 0.9], [0, 15]);

// Card positioning in motion.div
style={{
  left: '50%',
  top: '50%',
  transformOrigin: 'center',
  x: card1X,
  y: card1Y,
  rotate: card1Rotate,
  scale: cardScale,
  opacity: cardOpacity,
  translateX: '-50%',
  translateY: '-50%'
}}
```

### Key Features
- **Smooth Transitions**: No blinking or jumping during scroll
- **Perfect Alignment**: Horizontal and vertical alignment maintained
- **Emergence Effect**: Cards appear from phone center
- **Symmetrical Rotations**: ±15° angles for visual balance
- **Performance Optimized**: Uses transform styles for smooth 60fps animation

### Dependencies
- framer-motion: useScroll, useTransform, useMotionValue, animate
- React: forwardRef, useRef, useState, useEffect

### Usage Pattern
```jsx
<AboutUs phoneRef={phoneRef} />
```

### Animation Timing
- Section height: 300vh (extended scroll)
- Circle growth: First 40% of scroll
- Breathing: After 40% completion
- Card emergence: 70-90% of scroll progress