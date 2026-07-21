from PIL import Image

try:
    img = Image.open('public/assets/id-card-texture.png')
    print(f"Texture Size: {img.size}")
except Exception as e:
    print(e)
