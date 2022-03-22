import React from "react";

function Searchbar({
  searchFonts,
  typeSomething,
  searchCategorys,
  fontSize,
  handleChange,
  toggleTheme,
  listGridToggle,
  isList,
  reset,
  sticky,
  searchSubsets
}) {
  return (
    <div
      className={
        sticky
          ? "search-bar-container sticky-search-bar"
          : "search-bar-container"
      }
    >
    
      <div className="search-bar" style={sticky ? { border: "none" } : null}>
        <div className="fa fa-search"></div>

        <input
          type="text"
          name="searchFonts"
          value={searchFonts}
          className="search-fonts"
          placeholder="Search fonts"
          onChange={handleChange}
        />

        <input
          type="text"
          name="typeSomething"
          value={typeSomething}
          className="type-something"
          placeholder="Type something"
          onChange={handleChange}
        />
                    
       <select value={searchCategorys} name="searchCategorys" onChange={handleChange}>
          <option value="">Category</option>
          <option value="display">Display</option>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-Serif</option>
          <option value="monospace">Monospace</option>
          <option value="handwriting">Handwriting</option>
        </select>

        <select value={searchSubsets} name="searchSubsets" onChange={handleChange}>
        <option value="">Language</option>
          <option value="bengali">Assamese</option>
          <option value="ahom">Ahom</option>
          <option value="arabic">Arabic</option>
          <option value="adlam">Adlam</option>
          <option value="anatolian-hieroglyphs">Anatolian Hieroglyphs</option>
          <option value="avestan">Avestan</option>
          <option value="armenian">Armenian</option>
          <option value="balinese">Balinese</option>
          <option value="bamum">bamum</option>
          <option value="batak">Batak</option>
          <option value="bhaiksuki">Bhaiksuki</option>
          <option value="brahmi">Brahmi</option>
          <option value="buginese">Buginese</option>
          <option value="bengali">Bengali</option>
          <option value="buhid">Buhid</option>
          <option value="canadian-aboriginal">Canadian Aboriginal</option>
          <option value="caucasian-albanian">Caucasian Albanian</option>
          <option value="cham">Cham</option>
          <option value="carian">Carian</option>
          <option value="chakma">Chakma</option>
          <option value="cuneiform">Cuneiform</option>
          <option value="cherokee">Cherokee</option>
          <option value="coptic">Coptic</option>
          <option value="cypriot">Cypriot</option>
          <option value="chinese-hongkong">Chinese Hongkong</option>
          <option value="chinese-simplified">Chinese Simplified</option>
          <option value="chinese-traditional">Chinese Traditional</option>
          <option value="cyrillic">Cyrillic</option>
          <option value="cyrillic-ext">Cyrillic Extended</option>
          <option value="dogra">Dogra</option>
          <option value="deseret">Deseret</option>
          <option value="devanagari">Devanagari</option>
          <option value="duployan">Duployan</option>
          <option value="egyptian-hieroglyphs">Egyptian Hieroglyphs</option>
          <option value="elbasan">Elbasan</option>
          <option value="ethiopic">Ethiopic</option>
          <option value="elymaic">Elymaic</option>
          <option value="georgian">Georgian</option>
          <option value="gothic">Gothic</option>
          <option value="grantha">Grantha</option>
          <option value="georgian">Georgian</option>
          <option value="glagolitic">Glagolitic</option>
          <option value="greek">Greek</option>
          <option value="greek-ext">Greek Extended</option>
          <option value="gujarati">Gujarati</option>
          <option value="gurmukhi">Gurmukhi</option>
          <option value="gunjala-gondi">Gunjala Gondi</option>
          <option value="hebrew">Hebrew</option>
          <option value="hatran">Hatran</option>
          <option value="hanifi-rohingya">Hanifi Rohingya</option>
          <option value="imperial-aramaic">Imperial Aramaic</option>
          <option value="indic-siyaq-numbers">Indic Siyaq Numbers</option>
          <option value="inscriptional-pahlavi">Inscriptional Pahlavi</option>
          <option value="inscriptional-parthian">Inscriptional Parthian</option>
          <option value="japanese">Japanese</option>
          <option value="javanese">Javanese</option>
          <option value="kannada">Kannada</option>
          <option value="khojki">Khojki</option>
          <option value="khmer">Khmer</option>
          <option value="korean">Korean</option>
          <option value="khudawadi">Khudawadi</option>
          <option value="kaithi">Kaithi</option>
          <option value="kannada">Kannada</option>
          <option value="Kharoshthi">Kharoshthi</option>
          <option value="kayah-li">Kayah Li</option>
          <option value="lao">Lao</option>
          <option value="latin">Latin</option>
          <option value="lepcha">Lepcha</option>
          <option value="limbu">Limbu</option>
          <option value="latin-ext">Latin Extended</option>
          <option value="linear-a">Linear A</option>
          <option value="linear-b">Linear B</option>
          <option value="lisu">lisu</option>
          <option value="lycian">Lycian</option>
          <option value="lydian">Lydian</option>
          <option value="mandaic">Mandaic</option>
          <option value="manichaean">Manichaean</option>
          <option value="marchen">Marchen</option>
          <option value="mahajani">Mahajani</option>
          <option value="malayalam">Malayalam</option>
          <option value="masaram-gondi">Masaram-gondi</option>
          <option value="math">Math</option>
          <option value="mayan-numerals">Mayan Numerals</option>
          <option value="meetei-mayek">Meetei Mayek</option>
          <option value="meroitic">Meroitic</option>
          <option value="medefaidrin">Medefaidrin</option>
          <option value="miao">Miao</option>
          <option value="modi">Modi</option>
          <option value="mongolian">Mongolian</option>
          <option value="mro">Mro</option>
          <option value="multani">Multani</option>
          <option value="nyiakeng-puachue-hmong">Nyiakeng Puachue Hmong</option>
          <option value="nushu">Nushu</option>
          <option value="nko">Nko</option>
          <option value="nabataean">Nabataean</option>
          <option value="new-tai-lue">New Tai Lue</option>
          <option value="newa">newa</option>
          <option value="nushu">nushu</option>
          <option value="myanmar">Myanmar</option>
          <option value="osage">Osage</option>
          <option value="osmanya">Osmanya</option>
          <option value="oriya">Oriya</option>
          <option value="ogham">Ogham</option>
          <option value="ol-chiki">Ol Chiki</option>
          <option value="old-hungarian">Old Hungarian</option>
          <option value="old-italic">Old Italic</option>
          <option value="old-north-arabian">Old North Arabian</option>
          <option value="old-permic">Old Permic</option>
          <option value="old-persian">Old Persian</option>
          <option value="old-sogdian">Old Sogdian</option>
          <option value="old-south-arabian">Old South Arabian</option>
          <option value="old-turkic">Old Turkic</option>
          <option value="pahawh-hmong">Pahawh-hmong</option>
          <option value="palmyrene">Palmyrene</option>
          <option value="pau-cin-hau">Pau Cin Hau</option>
          <option value="phags-pa">Phags Pa</option>
          <option value="phoenician">Phoenician</option>
          <option value="psalter-pahlavi">Psalter Pahlavi</option>
          <option value="rejang">Rejang</option>
          <option value="runic">Runic</option>
          <option value="samaritan">Samaritan</option>
          <option value="saurashtra">Saurashtra</option>
          <option value="sharada">Sharada</option>
          <option value="siddham">Siddham</option>
          <option value="shavian">Shavian</option>
          <option value="sogdian">Sogdian</option>
          <option value="sora-sompeng">Sora Sompeng</option>
          <option value="sundanese">Sundanese</option>
          <option value="soyombo">Soyombo</option>
          <option value="symbols">Symbols</option>
          <option value="syloti-nagri">Syloti Nagri</option>
          <option value="sinhala">Sinhala</option>
          <option value="syriac">Syriac</option>
          <option value="tagalog">Tagalog</option>
          <option value="tagbanwa">Tagbanwa</option>
          <option value="tai-le">Tai Le</option>
          <option value="tai-tham">Tai Tham</option>
          <option value="tai-viet">Tai Viet</option>
          <option value="tangut">Tangut</option>
          <option value="tai-le">Tai Le</option>
          <option value="tamil-supplement">Tamil Supplement</option>
          <option value="tamil">Tamil</option>
          <option value="thaana">Thaana</option>
          <option value="telugu">telugu</option>
          <option value="thai">thai</option>
          <option value="tibetan">tibetan</option>
          <option value="tirhuta">Tirhuta</option>
          <option value="ugaritic">Ugaritic</option>
          <option value="vai">vai</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="wancho">Wancho</option>
          <option value="warang-citi">Warang Citi</option>
          <option value="yi">Yi</option>
          <option value="yezidi">Yezidi</option>
          <option value="zanabazar-square">Zanabazar Square</option>
        </select>

        <select value={fontSize} name="fontSize" onChange={handleChange}>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
          <option value="40px">40px</option>
          <option value="64px">64px</option>
          <option value="90px">90px</option>
        </select>

        <div className="background-chooser">
          <div className="fa fa-circle" onClick={toggleTheme}></div>
        </div>

        <div className="list-grid-chooser">
          <div
            className="fa fa-list"
            onClick={listGridToggle}
            style={isList ? { display: "none" } : { display: "initial" }} // don't display the list icon when in list mode
          ></div>
          <div
            className="fa fa-th"
            onClick={listGridToggle}
            style={isList ? { display: "initial" } : { display: "none" }} // don't display the grid icon when in grid mode
          ></div>
        </div>

        <div className="fa fa-repeat" onClick={reset}></div>
        
      </div>

    </div>
    
  );
}

export default Searchbar;
