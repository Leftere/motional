import statistic from './statistic.twig'
import statisticData from './statistic.yml'

export default { title: 'Molecules/Statistic' }

export const Statistic = () => statistic(statisticData)
