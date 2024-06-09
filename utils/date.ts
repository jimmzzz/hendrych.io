export const formatDate = (dateString: string) => {
    const date = new Date(Date.parse(dateString));
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};