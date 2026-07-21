from PIL import Image

img = Image.open('screenshot.png')
# The screenshot is 1280x720 or something like that.
print(f"Screenshot size: {img.size}")

# Sample points in a grid over the center of the screenshot
cx, cy = img.width // 2, img.height // 2

# Card is roughly in the center. Let's sample a 3x3 grid around the center, spaced by 50 pixels
for dy in [-100, 0, 100]:
    for dx in [-50, 0, 50]:
        r, g, b, *a = img.getpixel((cx + dx, cy + dy))
        # Find which grid cell this color matches best
        best_match = None
        min_dist = 999999
        for y in range(10):
            for x in range(10):
                target_r = int(x * 25.5)
                target_g = int(y * 25.5)
                target_b = 150
                
                dist = abs(r - target_r) + abs(g - target_g) + abs(b - target_b)
                if dist < min_dist:
                    min_dist = dist
                    best_match = (x, y)
        print(f"Offset ({dx}, {dy}): Color ({r},{g},{b}) -> Best Match Cell {best_match} (dist {min_dist})")

