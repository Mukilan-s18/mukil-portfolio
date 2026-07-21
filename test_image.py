from PIL import Image

try:
    img = Image.open('public/assets/id-card.png')
    print(f"Original ID Card Size: {img.size}")
except Exception as e:
    print(e)
