export function htmlEscape(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/`/g, '&#96;');
}

export function html(literals, ...values) {
    const raw = literals.raw;
    let result = '';

    values.forEach((value, i) => {
        let literal = raw[i];
        let shouldEscape = literal.endsWith('$');

        if (shouldEscape) {
            literal = literal.slice(0, -1);
        }

        if (Array.isArray(value)) {
            value = value.join('');
        } else if (value == null || typeof value === 'boolean') {
            value = '';
        } else if (typeof value === 'object') {
            value = JSON.stringify(value);
            shouldEscape = true;
        }

        if (shouldEscape) {
            value = htmlEscape(value);
        }

        result += literal;
        result += value;
    });

    result += raw[raw.length - 1];

    return result;
}
