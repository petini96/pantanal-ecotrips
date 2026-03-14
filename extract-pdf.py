import sys

try:
    import PyPDF2
    with open('public/tarifario-2026.pdf', 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
    with open('public/tarifario-2026-text.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Text extracted successfully to public/tarifario-2026-text.txt")
except ImportError:
    print("PyPDF2 not installed. Please run: pip install PyPDF2")
