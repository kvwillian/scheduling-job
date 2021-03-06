const { sortAndFinishSchedule } = require('./job');

describe('Scheduling Job Function', () => {
    it('should return correctly an array with the expected rules', () => {
        const input = [
            {
                id: 1,
                description: 'Importação de arquivos', 
                conclusionDate: new Date("2019-11-10 12:00:00"),
                estimatedTime: 2,
            },
            {
                id: 2,
                description: 'Importação de dados', 
                conclusionDate: new Date("2019-11-11 12:00:00"),
                estimatedTime: 4,
            },
            {
                id: 3,
                description: 'Importação de integração', 
                conclusionDate: new Date("2019-11-11 08:00:00"),
                estimatedTime: 6,
            },
        ];

        const expected = [
            ['1', '3'],
            ['2']
        ];

        const result = sortAndFinishSchedule(input);

        expect(result).toEqual(expected);
    })
})