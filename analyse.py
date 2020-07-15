from glob import glob
import re
from urllib.parse import urlparse
from pprint import pprint
import os.path


if __name__ == '__main__':
    srcs = glob('*.js')
    files_by_url = {}
    for fname in srcs:
        url = None
        with open(fname) as f:
            for line in f.readlines():
                if line.startswith('url: http'):
                    url = re.findall(r'^url: (.*)', line)[0]
        if url is None:
            print(f'ERROR in {fname}')
        parsed = urlparse(url)
        # unified_url = f'{parsed.scheme}://{parsed.netloc}{parsed.path}'
        unified_url = os.path.basename(parsed.path)
        files_with_same_url = files_by_url.setdefault(unified_url, [])
        files_with_same_url.append(fname)

    grouped_buckets = {}
    for url, files in files_by_url.items():
        if len(files) > 0:
            grouped_buckets[url] = len(files)

    print('all files: {}, buckets: {}, group buckets: {}'.format(
        len(srcs),
        len(files_by_url),
        len(grouped_buckets),
    ))

    pprint(grouped_buckets)
