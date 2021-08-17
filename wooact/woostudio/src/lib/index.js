/** 태그를 삭제하고 텍스트만 반환하는 함수
 * @param {string} textWithTag
 * @returns {string}
 */
export const removeTag = textWithTag => textWithTag.replace(/(<([^>]+)>)/gi, '');
