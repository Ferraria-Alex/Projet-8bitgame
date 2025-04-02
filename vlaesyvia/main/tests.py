from django.test import TestCase
from django.urls import reverse
from .models import Character
# Create your tests here.

class CharacterListViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create test data
        Character.objects.create(name="Warrior")
        Character.objects.create(name="Mage")
        Character.objects.create(name="Rogue")

    def test_view_url_exists(self):
        response = self.client.get('/characters/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('character-list'))
        self.assertEqual(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('character-list'))
        self.assertTemplateUsed(response, 'characters/list.html')

    def test_lists_all_characters(self):
        response = self.client.get(reverse('character-list'))
        self.assertEqual(len(response.context['characters']), 3)
        self.assertContains(response, "Warrior")
        self.assertContains(response, "Mage")
        self.assertContains(response, "Rogue")
        self.assertQuerysetEqual(
            response.context['characters'],
            Character.objects.all().order_by('name'),
            transform=lambda x: x
        )
        
    def test_empty_character_list(self):
        # Delete all test characters
        Character.objects.all().delete()
        response = self.client.get(reverse('character-list'))
        self.assertContains(response, "No characters found")

    def test_ordering(self):
        response = self.client.get(reverse('character-list'))
        # Verify alphabetical order (Mage, Rogue, Warrior)
        characters = list(response.context['characters'])
        self.assertEqual(characters[0].name, "Mage")
        self.assertEqual(characters[1].name, "Rogue")
        self.assertEqual(characters[2].name, "Warrior")