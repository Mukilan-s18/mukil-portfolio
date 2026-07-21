from PIL import Image

img = Image.open('screenshot.png')
cx, cy = img.width // 2, img.height // 2

# Sample a 5x5 grid in the center of the screen
for dy in range(-20, 21, 10):
    for dx in range(-20, 21, 10):
        r, g, b, *a = img.getpixel((cx + dx, cy + dy))
        # If it's the card, b should be around 100
        if 80 <= b <= 120:
            print(f"Card found! At offset {dx},{dy}: R={r} G={g} B={b}")
            # R is X/1600 * 255 -> X = R * 1600 / 255
            # G is Y/363 * 255 -> Y = G * 363 / 255
            print(f"Mapped UV center approximately: X={r*1600/255:.1f}, Y={g*363/255:.1f}")
            exit(0)
print("Card not found in center.")
