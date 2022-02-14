<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .btn {
    padding: 10px 50px;
    border: none;
    cursor: pointer;
    flex-grow: 1;
    z-index: 100;
    transition: all 0.5s;
  }

  .tab {
    width: 60%;
    margin: auto;
    min-width: 450px;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .tab_item {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .active {
    border-top: 1px solid blue;
    border-left: 1px solid blue;
    border-right: 1px solid blue;
    border-bottom: 1px solid #f5f5f5;
    transform: translateY(1px);
  }

  .tab_content {
    background-color: #f5f5f5;
    min-width: 100%;
    min-height: 200px;
    padding: 10px;
    border-top: 1px solid blue;
    border-left: 1px solid blue;
    border-right: 1px solid blue;
    border-bottom: 1px solid blue;
    z-index: 1;
  }

  .tab_content_item {
    width: 100%;
    display: none;
  }

  .show {
    display: block !important;
  }

</style>
<div class="tab">
  <div class="tab_item">
    <button data-mx-toggle="tab" data-mx-target="#content1" class="btn active">tab1</button>
    <button data-mx-toggle="tab" data-mx-target="#content2" class="btn">tab2</button>
    <button data-mx-toggle="tab" data-mx-target="#content3" class="btn">tab3</button>
  </div>
  <div class="tab_content">
    <div id="content1" class="tab_content_item show">
      content1
    </div>
    <div id="content2" class="tab_content_item">
      content2
    </div>
    <div id="content3" class="tab_content_item">
      content3
    </div>
  </div>
</div>


<script>
  const tabList = Array.from(document.querySelectorAll("[data-mx-toggle='tab']"))
  const contentList = Array.from(document.querySelectorAll(".tab_content_item"))
  const tab = document.querySelector(".tab")
  tab.addEventListener("click", evt => {
    if (evt.target.nodeName !== "BUTTON")
      return
    else
      toggleTab(evt.target)
  })

  function toggleTab(target) {
    const contentID = target.getAttribute("data-mx-target")
    tabList.forEach(tab => {
      if (tab.getAttribute("data-mx-target") === contentID) {
        tab.classList.add("active")
      } else {
        tab.classList.remove("active")
      }
    })
    contentList.forEach(content => {
      if (content.getAttribute("id") === contentID.slice(1)) {
        content.classList.add("show")
      } else {
        content.classList.remove("show")
      }
    })
  }

</script>

