
export function useUtils() {
  function openExternalLink(url: string) {
    window.open(url, '_blank');
  }
  function textEllipsis(text: string, left: number, right?: number) {
    let result = '';
    if (right) {
      result = text.length > left + right ? text.slice(0, left) + '...' + text.slice(-right) : text;
    } else {
      result = text.length > left ? text.slice(0, left) + '...' : text;
    }
    return result;
  }
  function setBodyOverflow(isHidden: boolean) {
    isHidden
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }
  return {
    openExternalLink,
    setBodyOverflow,
    textEllipsis,
  };
}
