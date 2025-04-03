let items = ["Item 1", "Item 2", "Item 3"];

        function displayItems() {
            let list = document.getElementById("itemList");
            list.innerHTML = ""; // Clear the list before updating
            items.forEach(item => {
                let li = document.createElement("li");
                li.textContent = item;
                list.appendChild(li);
            });
        }

        function addItem() {
            let newItem = document.getElementById("newItem").value;
            if (newItem) {
                items.push(newItem); // Add to the array
                document.getElementById("newItem").value = ""; // Clear input
                displayItems(); // Update list
            }
        }

        // Display initial items
        displayItems();
