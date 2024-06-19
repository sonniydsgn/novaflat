import os
paths = []
nach_path = input('Выберите название папки: ')
for path, subdirs, files in os.walk(f"{nach_path}/"):
    for name in files:
        if ".png" in name:
            paths.append(os.path.join(path, name))
        if ".jpg" in name:
            paths.append(os.path.join(path, name))
        if ".jpeg" in name:
            paths.append(os.path.join(path, name))
        if ".mp4" in name:
            paths.append(os.path.join(path, name))

for p in paths:
    if '.mp4' not in p:
        cmd = "magick.exe mogrify -resize 1920x1080^> -quality 90 -format jpg " + p
        os.system(cmd)
    else:
        a = '.' + '\\' + p.replace('/', '\\')
        cmd = f"ffmpeg -i {a} -c:v libx264 -crf 26 -acodec aac {'.' + '\\' + a.split('.')[1] + '_out.mp4'}"
        os.system(cmd)
        os.remove(a)
        os.rename('.' + '\\' + a.split('.')[1] + '_out.mp4', a)
    if '.png' in p or '.jpeg' in p:
        os.system("del " + '.' + '\\' + p.replace('/', '\\'))
