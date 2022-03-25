import { useEffect, useState } from "react";
import { Table, Heading, Container, SubTitle } from "reactbulma";
const CovidData = () => {
  const [covidData, setCovidData] = useState([]);
  let count = 1;
  let covidApi = "https://api.covidtracking.com/v1/us/daily.json";
  function fetchAPI() {
    fetch(covidApi)
      .then((res) => res.json())
      .then((data) => setCovidData(data))
      .catch((err) => err);
  }

  useEffect(() => {
    fetchAPI();
  });

  function handleDateChange(date) {
    let formattedDate = date
      .toString()
      .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");

    return formattedDate;
  }

  return (
    <div>
      <Container hasTextCentered>
        <Heading>
          <SubTitle>Covid data (U.S. Year 2021)</SubTitle>
        </Heading>
        <div>
          <Table className="table is-bordered is-centered">
            <Table.Head>
              <Table.Tr>
                <Table.Th>
                  <abbr title="id">Totol</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="data">Date</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="positive">Positives</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="negative">Negatives</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="pending">Pendings</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="hospitalized">Hospitalized</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="total results">Total test results</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="death">Deaths</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="death">Deaths increase</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="death">Positives increase</abbr>
                </Table.Th>
                <Table.Th>
                  <abbr title="death">Negatives increase</abbr>
                </Table.Th>
              </Table.Tr>
            </Table.Head>
            <Table.Body>
              {covidData.map((data) => (
                <Table.Tr key={data.hash}>
                  <Table.Th>{count++}</Table.Th>
                  <Table.Td>{handleDateChange(data.date)}</Table.Td>
                  <Table.Td>{data.positive}</Table.Td>
                  <Table.Td>{data.negative}</Table.Td>
                  <Table.Td>{data.pending}</Table.Td>
                  <Table.Td>{data.hospitalized}</Table.Td>
                  <Table.Td>{data.totalTestResults}</Table.Td>
                  <Table.Td>{data.death}</Table.Td>
                  <Table.Td>{data.deathIncrease}</Table.Td>
                  <Table.Td>{data.positiveIncrease}</Table.Td>
                  <Table.Td>{data.negativeIncrease}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default CovidData;
