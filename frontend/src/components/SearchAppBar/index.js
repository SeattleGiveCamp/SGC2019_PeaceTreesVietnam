import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const data = [
  {
    number: 1,
    ProjectName: {
      Type: " Danaan Perry Landmine Education Center "
    },
    "Project Type": "Community Project",
    Completion: 1997,
    Location: "Lê Thánh Tông, Phường 3, Đông Hà, Quảng Trị, Vietnam",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/community-projects/danaan-parry-landmine-education-center.html",
    "Lat, Long": "16.803569, 107.080717",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 2,
    ProjectName: {
      Type: "PeaceTrees Friendship Village"
    },
    "Project Type": "Community Project",
    Completion: 2002,
    Location: "Section 8, Ward 5, Dong Ha city",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/community-projects/peacetrees-vietnam-friendship-village.html",
    "Lat, Long": "16.802275, 107.089867",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 3,
    ProjectName: {
      Type: "Friendship Village Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2002,
    Location: "Đông Hà, Quảng Trị ",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/dash-friendship-kindergarten.html",
    "Lat, Long": "16.802, 107.091",
    "Sponsor(s)": "Karl Ege, Princeton Class of 1965",
    Dedication: "Dave Hackett & Steve Kelsey",
    "number of Students": 104,
    Notes: "Playground added in 2009. Part of larger Friendship Village project"
  },
  {
    number: 4,
    ProjectName: {
      Type: "Women’s Library of Vĩnh Hòa Commune"
    },
    "Project Type": "Library",
    Completion: 2004,
    Location: "Vĩnh Hòa commune, Vĩnh Linh district",
    "Site link": "none",
    "Lat, Long": "17.053902, 107.053085",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 5,
    ProjectName: {
      Type: "Women’s Library of Trung Giang Commune"
    },
    "Project Type": "Library",
    Completion: 2004,
    Location: "Trung Giang commune, Gio Linh district",
    "Site link": "none",
    "Lat, Long": "16.988651, 107.106216",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 6,
    ProjectName: {
      Type: "Women’s Library of Gio Viet Commune"
    },
    "Project Type": "Library",
    Completion: 2004,
    Location: "Cửa Việt townlet, Gio Linh district",
    "Site link": "none",
    "Lat, Long": "16.902202, 107.176304",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 7,
    ProjectName: {
      Type: "Women’s Library of Cam Tuyền Commune"
    },
    "Project Type": "Library",
    Completion: 2004,
    Location: "Cam Tuyền commune, Cam Lộ district",
    "Site link": "none",
    "Lat, Long": "16.815617, 106.980584",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 8,
    ProjectName: {
      Type: "Women’s Library of Hải Vĩnh Commune"
    },
    "Project Type": "Library",
    Completion: 2004,
    Location: "Hải Vĩnh commune, Hải Lăng district",
    "Site link": "none",
    "Lat, Long": "16.748433, 107.269977",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 9,
    ProjectName: {
      Type: "Hướng Tân Community Library"
    },
    "Project Type": "Library",
    Completion: 2005,
    Location: "Hướng Tân Commune, Hương Hóa District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/huong-tan-community-library.html",
    "Lat, Long": "16.663, 106.711",
    "Sponsor(s)": "Chuck Gaede",
    Dedication: "",
    "number of Students": null,
    Notes:
      "Used by over 10,000 people a year. Emergency shelter for women and children. Playground added in 2010"
  },
  {
    number: 10,
    ProjectName: {
      Type: "Triệu Đông Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2005,
    Location: "Triệu Đông Comm, QT",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/trieu-dong-kindergarten.html",
    "Lat, Long": "16.786, 107.208",
    "Sponsor(s)": "Nike",
    Dedication: "",
    "number of Students": null,
    Notes:
      "There were fewer students needing to be supported. Now used as a community center."
  },
  {
    number: 11,
    ProjectName: {
      Type: "David Warner Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2007,
    Location: "Amor Village, A Xing Commune, Hương Hóa District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/david-warner-kindergarten.html",
    "Lat, Long": "16.483, 106.698",
    "Sponsor(s)": "Sue Warner-Bean",
    Dedication: "",
    "number of Students": 48,
    Notes: "Playground added in 2009"
  },
  {
    number: 12,
    ProjectName: {
      Type: "Lao Bảo Library"
    },
    "Project Type": "Library",
    Completion: 2008,
    Location: "Lao Bảo townlet, Tân Thành Comm, Hương Hóa Dist",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/lao-bao-library.html",
    "Lat, Long": "16.604, 106.63",
    "Sponsor(s)": "Chuck Gaede",
    Dedication: "",
    "number of Students": null,
    Notes: "Playground added in 2010. Also a temp. women's shelter."
  },
  {
    number: 13,
    ProjectName: {
      Type: "Friendship Force Library"
    },
    "Project Type": "Library",
    Completion: 2009,
    Location: "A Xing Commune, Hương Hóa Dist",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/friendship-force-library.html",
    "Lat, Long": "16.486, 106.702",
    "Sponsor(s)": "Friendship Force International",
    Dedication: "",
    "number of Students": null,
    Notes: "Playground in 2010. Also a meeting center for Uxo education."
  },
  {
    number: 14,
    ProjectName: {
      Type: "Jesse Griego Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2009,
    Location: "A Cha Village, A Xing Commune, Hương Hóa District ",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/jesse-griego-kindergarten.html",
    "Lat, Long": "16.60, 106.63",
    "Sponsor(s)": "Jim Lewis",
    Dedication: "Jesse Griego (fallen marine of VN war)",
    "number of Students": 31,
    Notes:
      "Jim created his own fundraiser to raise money. Surpassed his goal enough to established a breakfast program and water well"
  },
  {
    number: 15,
    ProjectName: {
      Type: "Mother's Peace Library"
    },
    "Project Type": "Library",
    Completion: 2010,
    Location: "Khe Da Village, Lao Bảo Townlet, Hương Hóa District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/mothers-peace-library.html",
    "Lat, Long": "16.629, 106.597",
    "Sponsor(s)": "",
    Dedication:
      '"Dedicated to all mothers who lost sons and daughters during the war." Recognizes the sacrifices made by the mothers of troops.',
    "number of Students": null,
    Notes: "Also a shelter for women, meeting space for community. "
  },
  {
    number: 16,
    ProjectName: {
      Type: "Dan Cheney Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2010,
    Location: "Khe Da Village, Lao Bảo Townlet, Hương Hóa District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/dan-cheney-kindergarten.html",
    "Lat, Long": "16.63, 106.60",
    "Sponsor(s)": "Rae and Dan Cheney",
    Dedication: "",
    "number of Students": 21,
    Notes:
      "Rae Cheney is Mother of Jerilyn Brusseau (cofounder) and Dan is Jerilyn's brother."
  },
  {
    number: 17,
    ProjectName: {
      Type: "Pat Lucero Library"
    },
    "Project Type": "Library",
    Completion: 2010,
    Location: "Ba Lòng Commune, Đa Krông District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/pat-lucero-library.html",
    "Lat, Long": "16.632, 107.014",
    "Sponsor(s)": "Jim Lewis and the Lucero Family",
    Dedication: "Pat Lucero",
    "number of Students": null,
    Notes:
      "Also meeting place for community education. Received updated playground equip in 2012. "
  },
  {
    number: 18,
    ProjectName: {
      Type: "Heathful Garden for Healthy Children"
    },
    "Project Type": "Economic Development Project",
    Completion: 2010,
    Location: "Krong Klang town, Dakrong district",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/healthful-gardens-for-healthy-children.html",
    "Lat, Long": "16.71025, 106.878101",
    "Sponsor(s)": "Washington Women's Foundation",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 19,
    ProjectName: {
      Type: "Heathful Garden for Healthy Children"
    },
    "Project Type": "Economic Development Project",
    Completion: 2010,
    Location: "Mo O commune, Dakrong district",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/healthful-gardens-for-healthy-children.html",
    "Lat, Long": "16.67756, 106.903718",
    "Sponsor(s)": "Washington Women's Foundation",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 20,
    ProjectName: {
      Type: "Peace and Reconciliation Library"
    },
    "Project Type": "Library",
    Completion: 2011,
    Location: "Nai Cuu Hamlet, Triệu Đông Comm, QT",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/peace-and-reconcilitation-library.html",
    "Lat, Long": "16.784, 107.208",
    "Sponsor(s)": "Friends of Chuck Meadows",
    Dedication: "Chuck Meadows",
    "number of Students": null,
    Notes:
      "Chuck Meadows was a Executive Director for PTVN. Unfortunately passed away in March 2018"
  },
  {
    number: 21,
    ProjectName: {
      Type: "Bản Kè  Kindergarten "
    },
    "Project Type": "Kindergarten",
    Completion: 2012,
    Location:
      "Bản Kè Village, Lâm Hóa commune, Tuyên Hóa District Quảng Bình Province",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/ban-ke-kindergarten.html",
    "Lat, Long": "17.932, 105.802",
    "Sponsor(s)": "Ron Beman",
    Dedication: "",
    "number of Students": 25,
    Notes:
      "In Quảng Bình Province instead. We hope to expand there in the near future."
  },
  {
    number: 22,
    ProjectName: {
      Type: "Hope Kindergarten "
    },
    "Project Type": "Kindergarten",
    Completion: 2012,
    Location: "Hải Phúc Commune, Quảng Trị Province",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/hope-kindergarten.html",
    "Lat, Long": "16.616, 107.0398",
    "Sponsor(s)": "The Hope Project and Emily Fissel",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 23,
    ProjectName: {
      Type: "Grace Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2013,
    Location: "Khe Sanh townlet 5, Hương Hóa District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/grace-kindergarten.html",
    "Lat, Long": "16.617, 106.732",
    "Sponsor(s)": "Grace Episcopal Church",
    Dedication: "",
    "number of Students": 34,
    Notes:
      "Over the years, Grace Church has given over $63,000 in Grace Grants to PeaceTrees Vietnam"
  },
  {
    number: 24,
    ProjectName: {
      Type: "Computer Lab at Hai Lai Secondary School"
    },
    "Project Type": "Community Project",
    Completion: 2013,
    Location: "Hải Phúc Commune, Quảng Trị Province",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/computer-lab-at-hai-lai-secondary-school.html",
    "Lat, Long": "?",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: "Add on to Hai Lai Secondary School, which was built in 1975"
  },
  {
    number: 25,
    ProjectName: {
      Type: "Sunflower Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2014,
    Location: "Khe Sanh townlet 6, Hương Hóa District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/good-heart-kindergarten.html",
    "Lat, Long": "16.608, 106.731",
    "Sponsor(s)": "Mary Van Cleve",
    Dedication: "",
    "number of Students": 28,
    Notes: "Next to Khe Sanh Community Center"
  },
  {
    number: 26,
    ProjectName: {
      Type: "Mò ó Library - Lotus Friendship Library"
    },
    "Project Type": "Library",
    Completion: 2014,
    Location: "Krông Klang Township, Mò ó Commune, Đa Krông District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/mo-o-library.html",
    "Lat, Long": "16.685, 106.9",
    "Sponsor(s)":
      "Jim Lewis, Diann Logie, Megan McCloskey, Joseph Rowe, Sue Warner-Bean, and Marci (Warner) Williams",
    Dedication: "US Marine Corp veteran Joe Rowe, passed in 2016",
    "number of Students": null,
    Notes:
      "Also houses Vietnam Women's Union. Local meeting hall, emergency shelter for women, playground, reading and working room"
  },
  {
    number: 27,
    ProjectName: {
      Type: " Ba Long Community Center"
    },
    "Project Type": "Community Project",
    Completion: 2014,
    Location: "Ba Long commune, Dakrong district",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/community-projects/ba-long-community-center.html",
    "Lat, Long": "16.630956, 107.011278",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 28,
    ProjectName: {
      Type: " Ba Long Resettlement Village"
    },
    "Project Type": "Community Project",
    Completion: 2014,
    Location: "Ha Vung village, Ba long commune, Dakrong district",
    "Site link": "none",
    "Lat, Long": "16.632473, 107.010382",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 29,
    ProjectName: {
      Type: "Good Heart Kindergarten "
    },
    "Project Type": "Kindergarten",
    Completion: 2015,
    Location: "Xi Nuc Village, Tân Long Commune, Hương Hóa District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/friends-forever-kindergarten.html",
    "Lat, Long": "16.604, 106.649",
    "Sponsor(s)": "Hayward Family Foundation",
    Dedication: "",
    "number of Students": 15,
    Notes: ""
  },
  {
    number: 30,
    ProjectName: {
      Type: "Black Pepper Project "
    },
    "Project Type": "Economic Development Project",
    Completion: 2015,
    Location: "Tram village, Huong Tan commune, Huong Hoa district",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/black-pepper-project.html",
    "Lat, Long": "16.664878, 106.713018",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 31,
    ProjectName: {
      Type: "Black Pepper Project "
    },
    "Project Type": "Economic Development Project",
    Completion: 2015,
    Location: "Con village, Tan Lap commune, Huong Hoa district",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/black-pepper-project.html",
    "Lat, Long": "16.606, 106.708822",
    "Sponsor(s)": "",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 32,
    ProjectName: {
      Type: "Heathful Garden for Healthy Children"
    },
    "Project Type": "Economic Development Project",
    Completion: 2017,
    Location: "Tram village, Huong Tan commune, Huong Hoa district",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/healthful-gardens-for-healthy-children.html",
    "Lat, Long": "16.665696, 106.712713",
    "Sponsor(s)": "Seattle-area Rotary clubs and the Kirchoff Fitness Group",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 33,
    ProjectName: {
      Type: "Heathful Garden for Healthy Children"
    },
    "Project Type": "Economic Development Project",
    Completion: 2017,
    Location: "Ruong village, Huong Hiep commune, Dakrong district",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/healthful-gardens-for-healthy-children.html",
    "Lat, Long": "16.74314, 106.85105",
    "Sponsor(s)": "Seattle-area Rotary clubs and the Kirchoff Fitness Group",
    Dedication: "",
    "number of Students": null,
    Notes: ""
  },
  {
    number: 34,
    ProjectName: {
      Type: "Friends Forever Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2017,
    Location: "Vay Village, Tân Long Commune, Hương Hóa District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/friends-forever-kindergarten.html",
    "Lat, Long": "16.604, 106.649",
    "Sponsor(s)":
      "Bob Stokes and Sue Schroeter-Stokes, The Hayward Family Foundation, Quang Le",
    Dedication: "",
    "number of Students": 55,
    Notes:
      "Expansion completed in October 2019 that allowed another 22 students to attend"
  },
  {
    number: 35,
    ProjectName: {
      Type: "Ruộng Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2017,
    Location: "Tân Ruộng Village, Hướng Tân Commune, Hương Hóa Dist.",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/ruong-kindergarten.html",
    "Lat, Long": "16.656, 106.685",
    "Sponsor(s)": "The Ransom Family. Gail and Larry Ransom",
    Dedication: "Robert Ransom Jr.",
    "number of Students": 30,
    Notes: ""
  },
  {
    number: 36,
    ProjectName: {
      Type: "John C Seel Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2018,
    Location: "Xi Ra Man Village, Xy Commune, Hương Hóa Dist.",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/ra-man-kindergarten.html",
    "Lat, Long": "16.434, 106.72",
    "Sponsor(s)": "Robert and Barbara Spindel",
    Dedication: "John C Seel",
    "number of Students": 25,
    Notes: ""
  },
  {
    number: 37,
    ProjectName: {
      Type: "Arthur Bustamente Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2018,
    Location: "Tà Liềng Village, Đa Krông District",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/dakrong-kindergarten.html",
    "Lat, Long": "16.624, 106.861",
    "Sponsor(s)": "Jeff Nielsen",
    Dedication: "Arthur Bustamente",
    "number of Students": 27,
    Notes: ""
  },
  {
    number: 38,
    ProjectName: {
      Type: "Dash Friendship Kindergarten"
    },
    "Project Type": "Kindergarten",
    Completion: 2019,
    Location: "Bản Cốc Village, Hướng Linh Comm. Hương Hóa Dist.",
    "Site link":
      "https://www.peacetreesvietnam.org/what-we-do/education-and-economic-development/kindergartens/dash-friendship-kindergarten.html",
    "Lat, Long": "16.707, 106.776",
    "Sponsor(s)": "Rick and Karen McMichael",
    Dedication: 'Dorothy "Dash" McMichael',
    "number of Students": 24,
    Notes: ""
  }
].map(data => ({
  value: data.ProjectName.Type
  // label: "[Completion: " + data.ProjectName.Completion + "] " + data.number,
}));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default class SearchAppBar extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    //Search functionality
    function searchResult(textValue) {
      let result = [];
      //Once this function is trigged, hide all student items
      const name = data.value;
      if (this.state.value.length) {
        for (let i = 0; i < name.length; i++) {
          for (let j = 0; j < name[i].length; j++) {
            let partialName = name[i].slice(j, this.state.value.length + j);
            if (this.state.value !== partialName) continue;
            else if (this.state.value === partialName) {
              name[i].style.backgroundColor = "red";
              result.push(name[i]);
              break;
            }
          }
        }
      }
      return result;
    }
    // const classes = useStyles();
    return (
      <div>
        <div>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search…" name="value" onChange = {this.handleChange}/>
      </div>
    );
  }
}
