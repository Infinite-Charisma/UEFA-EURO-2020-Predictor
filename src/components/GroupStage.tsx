import Group from "./Group"

export default function GroupStage({ matches, teams, handleClick }) {
    const groupTeams = (teams) => {
        var result = [];
        for (var i = 0; i < teams.length; i += 4) {
            result.push(teams.slice(i, i + 4));
        }

        return result;

    }
    const groupedTeams = groupTeams([...teams])
    return (
        <div>
            {matches.map((el, index) => {
                return <Group name={el.name} groupIndex={index} teams={groupedTeams[index]} positions={matches[index]} handleClick={handleClick} />
            })}
        </div>
    )
}