import re

usa_dict = {}
with open('usawords', 'r') as usaf:
    usaw = usaf.readlines()
    for i in usaw:
        line_list = i.split('|')
        ori_word = line_list[1].replace('*','').strip()
        usa_dict[ori_word] = i
# 以上是美国政府网站上的单词做成的词典

uk_dict = {}
with open('ukwords', 'r') as ukf:
    ukw = ukf.readlines()
    for i in ukw:
        line_list = i.split('|')
        ori_word = line_list[1]
        ori_word = re.sub(r"\([^()]*\)", "", ori_word)
        ori_word = ori_word.strip()
        # 逐个判断是否在 usa_dict 里面
        if ori_word in usa_dict:
            if line_list[2].strip() == usa_dict[ori_word].split('|')[2].strip():
                print(ori_word + " :the same")
                print()
            else:
                print(ori_word)
                print("    " + usa_dict[ori_word].split('|')[2].strip())
                print("    " + line_list[2].strip())
                print()
        else:
            uk_dict[ori_word] = '|{{% notice %}}' + line_list[1].strip() + '{{% /notice %}}|{{% notice %}}' + line_list[2].strip() + '{{% /notice %}}|\n'

usa_dict.update(uk_dict)
with open("result", 'w') as rf:
    for key in sorted(usa_dict):
        rf.write(usa_dict[key])

