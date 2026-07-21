from PIL import Image, ImageDraw

img = Image.new('RGB', (1600, 363))
pixels = img.load()

for y in range(363):
    for x in range(1600):
        r = int((x / 1600.0) * 255)
        g = int((y / 363.0) * 255)
        pixels[x, y] = (r, g, 100)

img.save('public/assets/id-card-texture.png')
