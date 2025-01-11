from setuptools import setup, find_packages

setup(
    name='csearx-search',
    version='0.1.0',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'flask',
        'googlesearch-python'
    ],
    entry_points={
        'console_scripts': [
            'googlesearch_api = search_backend:app.run',
        ],
    },
)
