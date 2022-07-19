const getFile = require('../index');

const arraysResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('getFile::', () => {
  it('should return a function', () => {
    expect(typeof getFile).toBe('function');
  })
  it('should return array of results', async () => {
    const result = await getFile('./test/arquivos/texto1.md');
    expect(result).toEqual(arraysResult)
  })
  it('should return undefined if file not found', async () => {
    const result = await getFile('./test/arquivos/texto1_semlinks.md');
    expect(result).toBe('not links');
  })
})

// test('deve ser uma função', () => {
//   expect(typeof getFile).toBe('function');
// });