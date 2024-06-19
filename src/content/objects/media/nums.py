import os
i = 1
for path, subdirs, files in os.walk("images/"):
    for name in files:
        os.rename(f'./images/{name}', './images/' + str(i) + '.' + name.split('.')[1])
        i += 1

j = 1
for path, subdirs, files in os.walk("videos/"):
    for name in files:
        os.rename(f'./videos/{name}', './videos/' + str(j) + '.' + name.split('.')[1])
        j += 1
