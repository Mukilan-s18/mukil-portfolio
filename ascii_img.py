from PIL import Image
img = Image.open('public/assets/new.jpeg').convert('L')
img = img.resize((80, 20))
pixels = img.load()
chars = "@%#*+=-:. "
for y in range(img.height):
    line = ""
    for x in range(img.width):
        val = pixels[x, y]
        line += chars[val * len(chars) // 256]
    print(line)
