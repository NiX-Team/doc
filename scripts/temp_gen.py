# coding: utf-8

import os
import sys
import subprocess
from datetime import datetime


if sys.version_info[0] == 2:
    input = raw_input


FOOTER_TMP = '''
# {0}

## 贡献人员名单

该名单按照姓名拼音排序，格式为`名字 (邮箱地址)`。

* {1} (<{2}>)

## CHANGELOG

* v0.1 {3} {4}({1})
'''


def input_field(msg):
    while True:
        field = input(msg)
        if field:
            break
    return field


def main():
    while True:
        doc_name = input('Enter the file name (doc): ')
        if not doc_name:
            doc_name = 'doc'
        if not os.path.exists('docs/{0}.md'.format(doc_name)):
            doc_file = open('docs/{0}.md'.format(doc_name), 'w')
            break
        print('Document already exists, enter another name.')
        continue

    doc_title = input_field('Enter the title: ')

    name = input_field('Enter your name: ')

    try:
        email = subprocess.check_output('git config --get user.email'.split())\
                          .strip()
    except subprocess.CalledProcessError:
        email = input_field('Can not get your email from git config, '
                            'enter your email manually: ')

    now_str = datetime.now().strftime('%Y/%m/%d')

    changelog = input_field('Enter the CHANGELOG: ')

    doc_file.write(FOOTER_TMP.format(doc_title,
                                     name,
                                     email,
                                     now_str,
                                     changelog))
    print('Document created.')
    doc_file.close()


if __name__ == '__main__':
    main()
