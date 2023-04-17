import Image from "next/image";
function NftDetails({ details }) {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Attribute</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{details?.name}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>{details?.description}</td>
              </tr>
              {details?.attributes?.map((value) => {
                return (
                  <tr>
                    <th scope="row">{value.trait_type}</th>
                    <td>{value.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-sm-4 text-right">
          <Image src={details?.image} width={250} height={250} />
          <p class="h6">NFT </p>
        </div>
      </div>
    </>
  );
}

export default NftDetails;
