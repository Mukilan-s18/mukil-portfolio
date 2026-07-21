from PIL import Image, ImageDraw

# Create a 1024x1024 grid image
img = Image.new('RGB', (1024, 1024), color='white')
draw = ImageDraw.Draw(img)

# Draw a 10x10 grid with numbers
cell_w, cell_h = 102.4, 102.4
for y in range(10):
    for x in range(10):
        color = (int(x*25.5), int(y*25.5), 150)
        draw.rectangle([x*cell_w, y*cell_h, (x+1)*cell_w, (y+1)*cell_h], fill=color, outline='black')
        draw.text((x*cell_w + 10, y*cell_h + 10), f"{x},{y}", fill='white')

img.save('public/assets/id-card-texture.png')
