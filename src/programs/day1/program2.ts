 function replaceDots(str: string): string {
    // return str.replace(/\./g, '-');
    return str.replace(/[.]/g, '-');
  }


  console.log(replaceDots("sam...ishou..katjj..j"))